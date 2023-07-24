## Endpoints

### User sign-up

- Endpoint `/api/auth/register`
- Method `POST`
- Request Body:
  ```json
  {
    "name": "First Last",
    "email": "first_last@example.com",
    "password": "8-char-password",
    "role": "developer || admin"
  }
  ```
- Response:

  ```json
  {
    "message": "User created successfully",
    "createdUser": {
      "name": "First Last",
      "username": "thornyderivative",
      "email": "first_last@example.com",
      "password": "$2b$10$uueemn.blsLsU9IoJpjA6OvFjz.LhIAyjbYXCjxY/nK.e8LrLL9Sy",
      "role": "developer",
      "power": "user",
      "connections": [],
      "_id": "64bb40b3bc07188ec8a6671c",
      "createdAt": "2023-07-22T02:36:35.293Z",
      "updatedAt": "2023-07-22T02:36:35.293Z",
      "__v": 0
    }
  }
  ```

### User login

- Endpoint `/api/auth/login`
- Method `POST`
- Request Body:
  ```json
  {
    "email": "first_last@example.com",
    "password": "8-char-password"
  }
  ```
- Response:

  ```json
  {
    "userId": "64b798d42623011c509c1e2a",
    "name": "First Last",
    "username": "thornyderivative",
    "email": "first_last@example.com",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjc5OGQ0MjYyMzAxMWM1MDljMWUyYSIsIm5hbWUiOiJTYXl1cnUiLCJlbWFpbCI6InNheXVydUBnbWFpbC5jb20iLCJwb3dlciI6InVzZXIiLCJpYXQiOjE2ODk5OTM2MDgsImV4cCI6MTY5MDA4MDAwOH0.8pAip52nr5_izOiAu25DFeQxPuqSb7GXn55jjROggCi"
  }
  ```
