## Weather App Web Application
Kia ora! Thanks for reading this README file, following are the structure of the contents:
* [Tech Stack](#tech-stack)
* [Background and Demo Introduction](#background-and-demo-introduction)
* [Installation flow](#installation-flow)
* [Project Structure](#project-structure)
* [Features](#features)
* [Reference](#reference)

## Tech Stack
Core:
- ReactJS
- TypeScript
- TailwindCSS

Communication tool:
- Fetch

## Background and Demo Introduction
In this project, I explore the transition from JavaScript to TypeScript through the development of a weather application. JavaScript has long been the foundation of web development, offering flexibility and versatility. However, as web applications grow in complexity, developers encounter challenges in maintaining code quality and scalability.

To address these challenges, I've chosen TypeScript as the alternative language. TypeScript is a superset of JavaScript that introduces static typing and advanced features, enabling developers to catch errors early in the development process and write more maintainable code.

In this demo, I showcase the benefits of TypeScript by implementing a weather application with various components, including a `search feature`, `weather display`, and `individual weather attribute tiles`. I compare code examples in both JavaScript and TypeScript, highlighting how TypeScript enhances code reliability and developer productivity.

Through this demo, I aim to provide insights into TypeScript's features and demonstrate its potential to improve the development workflow for modern web applications. Whether you're a seasoned JavaScript developer or new to web development, this demo will illustrate the advantages of adopting TypeScript in your projects.

## Installation flow
Before you clone this repository, please make sure you have downloaded `React.js`, `Node.js and npm` and `Git` on your device.

Please make sure the version of `node.js` is at least `v18`, the version before this is not applicable.

Check the version using following command in the terminal:
```
node -v
```

It will show:
```
v(Node.js verision) for example: v18.16.1
```


After completing all the above steps, you can clone this repository on your device using the following command:
```
git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-1uhis.git
```
If you can't clone the repository on your device's terminal, try clone on the IDE's terminal (such as VS Code).

Or you can download this repository on your device.

Move into the project directory by running the following command:
```
cd cs732-assignment-1uhis.git
```

### Run the TypeScript project
Create a new file named `.env` to the `ts` folder, and paste the following code:
```
REACT_APP_API_KEY=fe3a922b253195a7d7498fbc42e62a3f
```

Move into the typescript project using the following command:
```
cd ts
```

Install project dependencies using npm. Run one of the following commands:
```
npm install
```

Start the development server to view the application in your browser. Use one of the following commands:
```
npm run start
```

Once the development server is running, open your web browser and navigate to the following URL:
```
http://localhost:3000
```

### Run the JavaScript project
Create a new file named `.env` to the `js` folder, and paste the following code:
```
REACT_APP_API_KEY=fe3a922b253195a7d7498fbc42e62a3f
```

Move into the javascript project using the following command:
```
cd js
```

Install project dependencies using npm. Run one of the following commands:
```
npm install
```

Start the development server to view the application in your browser. Use one of the following commands:
```
npm run start
```

Once the development server is running, open your web browser and navigate to the following URL:
```
http://localhost:3001
```

Once the server is running, you can access the application in your browser.

## Project Structure
<img width="174" alt="截屏2024-04-14 下午7 12 06" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-1uhis/assets/106042973/3f213dcb-83ee-4ffe-9fc4-433f502513fc">

**public**: Contains publicly accessible files, including the index.html file and the icon.

**src**: The main source directory where the source code files of the project are stored.

      components:
          hooks:
              useForecast.ts: Encapsulates the logic for managing weather forecast data fetching and user interactions related to searching and selecting cities.
              
          Icons: Store all the weather icons.
          
          info.ts:  Encapsulate common operations related to weather data interpretation, making it easier to handle and display weather information in a user-friendly manner.
          
          Search.tsx: Defines two React components: `Suggestions` and `Search`. Both components are designed to work together to create a user-friendly interface for searching and selecting cities for weather information.

          Tile.tsx: Defines a `Tile` component used for displaying various types of weather information with corresponding icons. This component provides a consistent way to display weather-related information with corresponding icons, enhancing the visual presentation of the data.

          types.ts: These are TypeScript type definitions for two types of data related to weather forecasts. These type definitions provide a clear structure for representing location options and weather forecasts in TypeScript, ensuring type safety and consistency when working with weather-related data in a React application.

          Weather.tsx: This component provides a comprehensive view of weather information, including current weather, forecast for different time intervals, and various weather-related metrics.

      App.jsx: Represents the main component of a web application built using React and TypeScript.

      index.css: Configuration for Tailwind CSS.

      index.tsx: A typical entry point for a React application, responsible for rendering the root component of the application into the DOM.

**.env**: Store environment variables for the project. 

**.gitignore**: Specifies which files and directories should be ignored by Git when tracking changes in a repository.
      
      

## Features
### Search Component:
<img width="1512" alt="截屏2024-04-13 下午9 50 56" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-1uhis/assets/106042973/de91ea78-0189-48d7-b93a-9e35b260d925">

* Allows users to search for weather information by entering the name of a city.
* Sends requests to the `OpenWeatherMap API` to retrieve weather data for the specified city.
* Renders the search results for users to select a city and view its weather information.

The code snippet represents a component named `Suggestions`, which is used to display a list of options for users to select from. Looking at the code, this component receives two important props: `options`, which likely contains an array of options to display, and `onSelect`, a function to handle what happens when an option is selected.

Inside the component, there's a JSX structure that renders an unordered list (`<ul>`), styled with a white background, rounded corners, and a purple border at the top. This list is generated dynamically using the `map()` function to iterate over the `options` array. For each option, a list item (`<li>`) is created, and within it, there's a button that displays the option's name and country.

Each button has an `onClick` event handler attached to it, which calls the `onSelect` function when clicked. This allows the parent component to react to the user's selection. Also, the `key` attribute is set to a unique identifier generated from the option's name and index to optimize rendering performance in React.

``` tsx
const Suggestions = ({ options, onSelect }: SuggestionsProps): JSX.Element => (
  <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg overflow-hidden border-t-2 border-purple-600">
    {options.map((option: optionType, index: number) => (
      <li key={`${option.name}-${index}`}>
        <button
          className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-800 focus:outline-none focus:bg-gray-100"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
);
```
### Weather Component and Tile Component
<img width="1512" alt="截屏2024-04-13 下午9 51 08" src="https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-1uhis/assets/106042973/8f018e13-dc36-4b08-b6d5-a9c5d61061da">

* Displays detailed weather information for the selected city, including temperature, humidity, wind speed, and other relevant data.
* Utilizes data retrieved from the `OpenWeatherMap API` to dynamically populate the weather details.
* Represents individual weather attributes such as sunrise time, sunset time, wind direction, humidity, etc.
* Provides a visually appealing and organized display of weather data for easy comprehension.

This code defines a functional component named `WeatherLeftSection`, which is responsible for rendering the left section of weather information on the user interface. It receives a single prop `data`, which likely contains weather data for the current location. Inside the component, the `today` variable is assigned the first item in the `list` array of `data`, presumably representing the current weather information.

The JSX structure returned by the component represents a container div with specific styling attributes. Inside this container, there are several elements:

1. A heading (`<h2>`) displaying the name of the location and its country, which are extracted from the `data` prop.
2. Another heading (`<h1>`) showing the current temperature, retrieved from the `main` object of the `today` variable, rounded to the nearest whole number.
3. A paragraph (`<p>`) displaying the main weather condition and its description, likely obtained from the `weather` array within the `today` object.
4. An image (`<img>`) representing the weather icon corresponding to the current weather condition. The `src` attribute is dynamically generated using the weather icon code from the `today` object, fetched from an external API.

``` tsx
const WeatherLeftSection = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <div className="w-full md:w-1/3 px-4 py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg mb-4 md:mb-0">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          {data.name}, {data.country}
        </h2>
        <h1 className="text-6xl font-extrabold mb-2 text-center text-white">
          <Degree temp={Math.round(today.main.temp)} />
        </h1>
        <p className="text-lg mb-4 text-center text-white">
          {today.weather[0].main} ({today.weather[0].description})
        </p>
        <img
          alt={`weather-icon-${today.weather[0].description}`}
          src={`http://openweathermap.org/img/wn/${today.weather[0].icon}.png`}
          className="h-24 w-24 mx-auto"
        />
      </div>
    </div>
  );
};
``` 
This code snippet defines a React functional component called `WeatherBottomRightSection`. It receives a single prop `data`, which likely contains weather data for the current location.

The JSX structure returned by this component consists of a container div with specific styling attributes such as width, padding, background color, and shadow effects, giving it a visually appealing appearance. Inside this container, there's a grid layout defined using CSS grid, with different column configurations based on the screen size.

Within the grid layout, there are multiple instances of the `Tile` component being rendered, each representing a specific piece of weather-related information. The `Tile` component receives props such as `icon`, `title`, and `info`, which are dynamically generated based on the weather data passed down from the parent component.

In the provided snippet, one instance of the `Tile` component is shown, representing the sunrise time. It displays an icon, a title indicating "Sunrise," and the corresponding sunrise time obtained using the `getSunTime` function, which likely formats the timestamp into a human-readable time format.

``` tsx
const WeatherBottomRightSection = ({ data }: Props) => (
  <div className="w-full px-12 py-9 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <Tile
        icon='sunrise'
        title="Sunrise"
        info={getSunTime(data.sunrise)}
```

### Utility Functions

* Includes helper functions for various tasks related to weather data manipulation and presentation.
* Examples of utility functions include converting temperature units, formatting timestamps, calculating weather attributes, etc.

``` tsx
export const getWindDirection = (deg: number): string => {

  if (deg > 76 && deg <= 105) return 'E'
  if (deg > 105 && deg <= 165) return 'SE'
}
```

``` tsx
export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Dry and comfortable'
  if (level > 55 && level <= 65) return 'A bit uncomfortable, sticky feeling'

  return 'Lots of moisture, uncomfortable air'
}
```

```tsx
export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}
```

## Reference

[1] OpenWeatherAPI - https://openweathermap.org/

[2] TypeScript Doc - https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

[3] How to use fetch in TypeScript - https://www.geeksforgeeks.org/how-to-use-fetch-in-typescript/

[4] Fetch with Typescript for better HTTP API Clients - https://dev.to/simonireilly/fetch-with-typescript-for-better-http-api-clients-2d71

[5] Tailwind CSS components - https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation
