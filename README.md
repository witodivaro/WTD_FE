# Wito's To-Dos Frontend

## Technology stack and details

### Language:
TypeScript 

### Framework:
React.js

### Framework additions:
Redux, Redux-Sagas, Reselect, react-datepicker

### Bootstrap:
create-react-app

### Network:
axios, socket.io-client

### Styles:
Material UI (responsive)
SCSS

### Validation:
Formik
Yup

## Installation
1. Clone this repo (SSH):
    ```
    $ git clone git@github.com:witodivaro/WTD_FE.git
    ```
    or (HTTPS):
    ```
    $ git clone https://github.com/witodivaro/WTD_FE.git
    ```

2. Install project dependencies:
    ```bash
    $ yarn
    ```

3. Builds the app to the build folder:
    ```bash
    $ yarn build
    ```

4. Start the development environment:
   ``` bash
    $ yarn start
    ```

5. Open your browser and visit <http://localhost:3000>

## Development

#### Run tests:
```bash
$ yarn test
```

## Deployment

## Repo structure
It can be helpful to know what all these different files are for:

```
/
├─ node_modules/         # packages installed by Yarn
│
├─ public/               # static files
│  ├─ index.html
│  └─ manifest.json
│
├─ src/
│  │
│  ├─ components/        # Components  
│  │
│  ├─ const/             # Constants
│  │
│  ├─ redux/             # Actions, sagas and reducers
│  │  ├─ tasks/          # …for tasks flow
│  │  ├─ user/           # …for user flow
│  │  |  ├─ actions.ts   # User actions
│  │  |  ├─ reducers.ts  # User reducer
│  │  |  ├─ sagas.ts     # User sagas 
│  │  |  ├─ selectors.ts # User selectors 
│  │  |  ├─ types.ts     # User types (Action types, action interfaces, etc.)
│  │  |  └─ index.ts     # Exports all these files
│  │  │
│  │  ├─ root.ts         # for rootSaga and rootReducer 
│  │  └─ store.ts        # App's store
│  |
│  ├─ types/             # Global application types
│  |
│  ├─ pages/             # Pages
│  |
│  ├─ utils/             # Utility functions
│  │
│  ├─ App.tsx            # Root component of the react app
│  ├─ index.tsx          # Entry point for the app
│  └─ index.scss         # Global application styles
│
├─ .gitignore        # List of files and folders not tracked by Git
├─ package.json      # Installed dependencies
├─ README.md         # This file
├─ tsconfig.json     # Specifies the root files and the compiler options
└─ yarn.lock         # Versions of the dependencies specified in a package.json file
```
