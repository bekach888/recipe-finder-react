# Recipe Finder SPA

**Recipe Finder** is a Single Page Application (SPA) built with **React**, allowing users to search for recipes, view details of each recipe, and manage favorites. The app uses a responsive design, supports dark mode, and integrates with a third-party API to fetch recipe data.

## Features
- Search for recipes by name.
- View detailed information about each recipe.
- Add recipes to the favorites list.
- Light and dark mode support.
- Smooth animations with **Framer Motion**.

## Technologies Used
- **React**: For building the user interface and managing the state.
- **React Router**: For routing and navigating between pages.
- **Tailwind CSS**: For styling and ensuring responsiveness.
- **Framer Motion**: For adding animations.
- **useFetch Hook**: For fetching data from the API.
- **LocalStorage**: For saving dark/light theme preferences.

## Installation

### Clone the repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/bekach888/recipe-finder-app.git
```

### Install dependencies

```bash
cd recipe-finder-app
npm install
```

### Start the development server

```bash
npm start
```
## Usage
After the app is running, you can:
- **Search for recipes**: Use the search bar to search for recipes by name.
- **View recipe details**: Click on any recipe to view detailed information.
- **Toggle between light and dark mode**: Click the theme toggle button to switch between light and dark modes.
- **Manage favorites**: Click the heart icon to view your favorite recipes.

## API
The app uses the MealDB API to fetch recipe data. When you enter a search term, the app fetches recipes from the API based on the search query.

- **Endpoint**: https://www.themealdb.com/api/json/v1/1/search.php
- **Query Parameter**: s=<search term> (e.g., s=pasta)

## License

This project is open-source and available under the MIT License.

## Author
**Beka Tchkoidze**
