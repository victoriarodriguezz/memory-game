# Memory Game

## Prerequisites

Before you begin, ensure you have the following versions installed:

- [Node.js](https://nodejs.org/) (v20.9.0)
- [npm](https://www.npmjs.com/) (v10.1.0)

## Installation

Follow these steps to install and set up the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/victoriarodriguezz/memory-game
    ```

2. **Navigate to the project directory:**

    ```bash
    cd memory-game
    ```

3. **Install dependencies:**

   Run the following command to install the required dependencies:

    ```bash
    npm install
    ```

   This will download and install all the necessary packages specified in the `package.json` file.

4. **Start the development server:**

   Once the installation is complete, start the development server with the following command:

    ```bash
    npm run start
    ```

   This command will launch the development server, and you can view your React app in your browser at `http://localhost:3000`.

Now, your project should be up and running locally. If you encounter any issues during the installation process, make sure you have Node.js and npm installed on your machine and that your internet connection is stable.

## Running Tests

To ensure the stability of the project, you can run tests using Jest. Follow these steps:

1. **Navigate to the project directory:**

    ```bash
    cd memory-game
    ```

2. **Run tests:**

   Execute the following command to run the test suite:

    ```bash
    npm run test
    ```

   This will trigger Jest to run the tests and provide feedback on the test results. Ensure that all tests pass successfully.

3. **Review test coverage (optional):**

   If you want to check the test coverage, you can use the following command:

    ```bash
    npm run test -- --coverage
    ```

   This will generate a coverage report, and you can review it to ensure comprehensive test coverage for your project.

## Project Structure
      .
      ├── public
      ├── src
      │   └── components
      │   ├── hooks
      │   ├── layouts
      │   ├── pages
      │   ├── routes
      │   ├── services
      │   ├── utils
      │   ├── App.js
      │   ├── index.css
      │   ├── index.js
      │   ├── reportWebVitals.js
      │   ├── setupTest.js
      ├── .babelrc
      └── .env
      ├── .gitignore
      ├── babel.config.js
      ├── jest.config.js
      ├── package.json
      ├── package-lock.json
      ├── postcss.config.js
      ├── README.md
      └── tailwind.config.js


## Documentation

- [Node](https://nodejs.org/es/docs/)
- [NPM](https://docs.npmjs.com/)
- [Axios](https://axios-http.com/es/docs/intro)
- [React-query](https://tanstack.com/query/v5/docs/framework/react/overview)
- [tailwindcss](https://tailwindcss.com/)
- [Jest](https://jest-archive-august-2023.netlify.app/docs/28.x/getting-started/)
