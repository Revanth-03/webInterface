# Dynamic Form Builder

This is a web interface built with React that allows users to dynamically build a form by adding and deleting fields with various data types. The application is hosted on firebase and can be accessed at [https://web-interface-292e0.web.app](https://web-interface-292e0.web.app/).

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [How to use](#how-to-use)
- [Code Structure](#code-structure)
- [Technologies used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)
- [Additional Information](#additional-information)

## Features

This project is a React-based web interface that allows users to create and delete fields.

Features include:

- Adding and deleting fields
- Editing field names
- Choosing field types (string, number, boolean, object)
- Nesting fields (using objects)

## Getting started

To get started, clone the repository and run `npm install` to install the necessary dependencies.

```bash
git clone https://github.com/Revanth-03/webInterface.git                  # Clones the repository
cd webInterface                                                           # Navigates to the cloned directory
npm install                                                               # Installs the required dependencies
```

## How to use
To use the web interface, run `npm start` to start the development server, and navigate to `http://localhost:3000` in your browser.

From there, you can add fields by clicking the "+" button and choose the field type and name. You can also delete fields by clicking the "X" button.

## Code Structure
The project consists of two components:

- WebInterface: This is the main component that renders the web interface and manages the list of fields. It uses the `useState` hook to keep track of the fields and provides callbacks for adding and deleting fields.
- FieldComponent: This is a reusable component that represents a single field. It can be used recursively to allow nesting of fields.

## Technologies used
This project was built using:

- React
- scss

## Contributing
Contributions are welcome! If you notice any bugs or have any suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Demo
A live demo of the project can be found at [here](https://youtu.be/TIAJ8LTTCKI).

## Acknowledgements
In the project i used [React.cloneElement()](https://blog.logrocket.com/using-react-cloneelement-function/) to remove the child fields

## Additional Information
Follow the comments in the code . You can aslo connect me [revanthsrinivaslu03@gmail.com](revanthsrinivaslu03@gmail.com)

