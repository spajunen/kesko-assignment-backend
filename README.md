# Traffic In Stores Application

Display and update traffic information in stores.

Application is running at Heroku: https://kesko-assignment-backend.herokuapp.com/

Frontend code: https://github.com/spajunen/kesko-assignment-frontend

## About the Project

This application is developed as a assignment from Kesko, as a part of interview process for Junior Full Stack Developer job.

### Problem

This application can be used for displaying and updating traffic information in stores, like supermarkets, hardwarestores, etc. Nowadays customers might want to visit stores outside rush hours to avoid too many contacts with other customers to stay safe.

### Requirements

- Implement a micro-service in a language of your choice
- The micro-service can do anything you like
- It should have an API with at least two endpoints
- A React front end application to take advantage of your APIs
- Use GitHub and deploy the service to a cloud like Heroku, AWS, …
- Write a README with instructions for use
- Surprise us with your creativity

### Further developement

- Add database
- Add login for add & update
- Add search & pagination for table
- Add delete function
- Add possibility to search by location
- Add tests

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites
#### Backend

- Node.js
- Express
```
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.2"
  },
  "devDependencies": {
    "eslint": "^8.7.0",
    "eslint-plugin-react": "^7.28.0",
    "nodemon": "^2.0.15"
  }
```
#### Frontend
- React.js
```
  "dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@mui/icons-material": "^5.3.0",
    "@mui/material": "^5.3.0",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^0.25.0",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.3"
  },
  ```
### Installing

First, clone the repositories to your computer:
```
git clone https://github.com/spajunen/kesko-assignment-backend.git
git clone https://github.com/spajunen/kesko-assignment-frontend.git
```
Then, run the following commands in the root of each project:
```
1. npm install
2. npm start
```
Services are now running:
Frontend: http://localhost:3000/
Backend: http://localhost:3001/

## Technologies

### Backend
- Node.js
- Express

### Frontend
- React.js
- Axios
- Material UI
- Moment.js

### Deployment
- Heroku

### Other
- No database. Available API calls: 
  - /api/stores
  - /api/stores/id (1-3)

