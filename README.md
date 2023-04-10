# Simple Clicker Web App

This is a simple clicker web app created using React. The app allows users to generate clicks and purchase various upgrades to increase the number of clicks produced automatically or through manual interaction. The app utilizes localStorage to persist user progress, even when the browser is closed.

## Features

- Generate clicks by pressing the 'Click me' button.
- Purchase various upgrades to increase click generation:
  - Auto-click upgrades
  - Factory upgrades
  - Click-plant upgrades
  - Click-portal upgrades
  - Click-space-station upgrades
- Increase the efficiency of the upgrades by purchasing multipliers.
- Save user progress in localStorage for persistence between sessions.
- Perform a quick reset or a hard reset to start over.

## Constants and Configuration

To reduce the need for hardcoding and to have all values in one place for ease of change if necessary, all constants are held in a separate JSON file. This approach enables easy management and modification of configuration values, such as costs, multipliers, and other settings, without having to search through the entire codebase.

## Technologies Used

This project was created using the following technologies:

- React: A JavaScript library for building user interfaces.
- Create React App: A toolchain for setting up a React project without manual configuration.
- JavaScript (ES6+): The programming language used for creating the app logic.
- HTML5 and CSS3: Used for creating the structure and styling of the app.

## Getting Started

To use the Simple Clicker Web App, you need to have Node.js installed. Follow these steps to get started:

1. Clone this repository
```bash
git clone https://github.com/hafalxd/clickergame.git
```

2. Navigate to the project directory
```bash
cd clickergame
```

3. Install the required dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open your web browser and visit http://localhost:3000 to use the Simple Clicker Web App.

## Dependencies

This project uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- @use-it/interval: A React Hook for using setInterval in function components.

## App Structure

The main component of the app is App, which is a functional component that utilizes React Hooks for managing state and side effects.

The app's state includes:

- Manual click upgrades and costs
- Auto-clicks, costs, and multipliers
- Factories, costs, and multipliers
- Click-plants, costs, and multipliers
- Click-portals, costs, and multipliers

The app utilizes useEffect to sync the state with localStorage and useInterval for managing the automatic click generation.

Various functions are defined for handling user interaction and purchasing upgrades. The functions are attached to buttons in the JSX, which are displayed to the user.

## Contributing

Feel free to submit a pull request if you would like to contribute to the project. If you find any issues or have suggestions, please create a new issue.

## License

This project is open-source and available under the MIT License.










