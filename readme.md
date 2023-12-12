## Post Service

- The service contains crud operation for creating post
- It has following routes
  - GET `/post`
  - GET `/post/:id`
  - POST `/post`
  - PUT `/post/:id`
  - DELETE `/post/:id`

### Structure

    - NodeJs version 20, with typescript
    - Database postgres
    - Test database sqlite3

### To run app locally

- Setup using docker

  - docker-compose up -d --build

- Run locally
  - Change `.env` file
  - Add postgres database credentials inside `.env` file

### To run tests

    - `npm install`
    - `npm test`

- The code coverage will be generated inside
