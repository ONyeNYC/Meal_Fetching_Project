const fetchedMeals = []; // This is an array that will store the ID's of meals that have already been fetched to ensure uniqueness.

function fetchUniqueMeal() {
  return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];

      // Check if the meal is already in our list
      if (fetchedMeals.includes(meal.idMeal)) {
        // If the meal is already fetched, fetch again
        return fetchUniqueMeal();
      } else {
        // If the meal is unique, add to our list and return it
        fetchedMeals.push(meal.idMeal);
        return meal;
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const foodItems = document.querySelectorAll(".pop-food");

  foodItems.forEach((item) => {
    fetchUniqueMeal()
      .then((meal) => {
        const img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        img.style.width = "100%";
        img.style.height = "100%";

        img.onclick = function () {
          const modal = document.createElement("div");
          modal.classList.add("modal");

          const modalContent = document.createElement("div");
          modalContent.classList.add("modal-content");

          const largeImg = document.createElement("img");
          largeImg.src = meal.strMealThumb;
          largeImg.alt = meal.strMeal;
          largeImg.classList.add("large-img");

          const mealDetails = document.createElement("p");
          mealDetails.textContent = meal.strInstructions;

          const closeButton = document.createElement("button");
          closeButton.textContent = "Close";
          closeButton.onclick = function () {
            modal.remove();
          };

          modalContent.appendChild(largeImg);
          modalContent.appendChild(mealDetails);
          modalContent.appendChild(closeButton);
          modal.appendChild(modalContent);
          document.body.appendChild(modal);
        };

        item.innerHTML = ""; // clear any content inside the div
        item.appendChild(img);
      })
      .catch((error) => {
        console.error("Error fetching the food data:", error);
      });
  });
});
