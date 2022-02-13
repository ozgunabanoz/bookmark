# INSTRUCTIONS

## Before Execution

Create an .env file. Inside the file, fill these fields:

    {
        PORT="" // which server operates at
        DB_HOST="" // db host name
        DB_USERNAME="" // db username
        DB_PW="" // db username password
        JWT_SECRET="" // a string for sign jwt tokens
    }

## Notes

To list books from Google Books API, you don't need credentials. But adding, listing or deleting bookmarks, you need user credentials. So you need to signup first to obtain a token, then you can execute those operations.

## Routes

- GET /books: Lists books from Google Books API based on the query parameters.

Query parameters:

    {
        "title": "",
        "author": "",
        "keyword: "",
        "limit": 10, // optional. min 10, max 50. default 10.
        "startIndex": 0 // optional. default 0.
    }

From title, author and keyword parameters, at least one of them must be present in the request. Limit and startIndex are optional parameters.

- GET /bookmark: Lists user's bookmarks. You need a valid jwt token for this operation. You have to sign up or logged in to your account first to obtain a token.

Header format should be like this:

    {
        "Authorization": "Bearer {{token}}"
    }

Query parameters:

    {
        "limit": 10, // optional. min 10, max 50. default 10.
        "page": 0 // optional. default 0.
    }

- POST /bookmark: For adding a new bookmark.

Header format:

    {
        "Authorization": "Bearer {{token}}"
    }

Request body:

    {
        "googleId": "" // you need to have valid googleId for the book
    }

- DELETE /bookmark/id: For deleting a bookmark.

Header format:

      {
          "Authorization": "Bearer {{token}}"
      }

Path variables:

      {
          "id": "" // you need to have valid book id
      }

- POST /auth/signup: For registering.

Request body:

    {
        "email": "",
        "password: "" // minimum 8 characters long
    }

- POST /auth/login: For logging in.

Request body:

    {
        "email": "",
        "password: ""
    }
