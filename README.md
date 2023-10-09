# Meal Fetching Project

## Overview

This project fetches random meals from an API and displays them in a grid layout. When you click on a meal, a modal appears showing more details about the meal.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API

## Features

- Fetches unique meals from the API
- Displays meals in a grid layout
- Shows meal details in a modal when clicked

# How to Run the Project

1. Clone the repository

   ```bash
   git clone [repository_url]
   ```

2. Open `index.html` in your browser

## Project Structure

- `index.html`: Contains the HTML structure
- `style.css`: Contains the styling
- `script.js`: Contains the JavaScript logic

### HTML Structure

The HTML file contains a main container with multiple grid items. Each grid item is a div element that will display a meal.

### JavaScript Logic

The JavaScript file uses the Fetch API to get random meals from 'https://www.themealdb.com/api/json/v1/1/random.php'. It ensures that each meal is unique by storing fetched meal IDs in an array.
