# TV Show Details App

## Overview

The **TV Show Details App** is a React-based web application that provides detailed information about TV shows and their episodes. Built with modern web technologies, including React, Redux, TypeScript, and CSS-in-JS, this app integrates with the TV Maze API to deliver show and episode details.

## Features

The application consists of two primary pages:

### TV Show Page
- **Show Title**: Displays the title of the TV show.
- **Show Description**: Provides a brief summary of the TV show.
- **Show Cover Image**: Shows the cover image of the TV show.
- **Episode List**: Lists all episodes of the show, each linked to a detailed episode page.

### Episode Detail Page

- **Episode Title**: Displays the title of the episode.
- **Episode Summary**: Provides a detailed summary of the episode.
- **Episode Cover Image**: Shows the cover image of the episode.

## API

The app retrieves data from the [TV Maze API](http://www.tvmaze.com/api).

## Technologies

- **React**: For building user interfaces.
- **Redux**: For state management.
- **TypeScript**: For type safety and better development experience.
- **CSS-in-JS**: For styling components with Emotion.
- **Create React App**: For bootstrapping the project.

## Setup and Installation

### Prerequisites

- **Node.js**: Version 14.x or higher.
- **npm**: Package managers

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tv-show-details-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd powerpuff-girls-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser and navigate to** `http://localhost:3000` to view the application.

## Project Structure

- **src/components**: Contains React components for the app.
- **src/redux/slices**: Contains Redux slices for managing state.
- **src/utils/api.ts**: Contains functions for API calls.
- **src/types/types.ts**: Contains TypeScript type definitions.
- **src/styles**: Contains styled components and global styles.

## Testing

The project includes unit and snapshot tests. To run the tests, use:

```bash
npm test
# or
yarn test
```

## Linting and Formatting

Code quality is maintained with ESLint and Prettier. To lint and format the code, use:

```bash
npm run lint
# or
yarn lint
```

```bash
npm run format
# or
yarn format
```

## Contributing

1. **Fork the repository** and create a new branch.
2. **Make your changes** and commit them with clear messages.
3. **Push your changes** to your forked repository.
4. **Open a pull request** with a detailed description of your changes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [TV Maze API](http://www.tvmaze.com/api) for providing TV show data.
- [Create React App](https://create-react-app.dev/) for bootstrapping the project.

---

Feel free to customize this README further based on additional details or preferences specific to your project!