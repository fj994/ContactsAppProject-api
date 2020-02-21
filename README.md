# Frontend Task API Mock
This is a mocked API for the frontend interview task.  

## Requirements
You need to have Node.js and npm installed.  
API is written in ES6 and is not transpiled, so you should have Node version > 6.

## Setup
To successfully run the API you need to:
 1. Git clone the repository with `git clone git@github.com:Typeqast/FrontendTaskApiMock.git`
 2. Install the dependencies with `npm i`
 3. Run the API with `npm start`

## Configuration
You can configure API response model by editing `db.json` file.  
If you do so, please attach the modified file in the email, alongside the link to the frontend task.

## Endpoints
This application uses json-server module under the hood and just adds image upload on top of it.  
**NOTE:** response examples look ike data from `db.json` config, if you re-configure it, responses will differ from whats shown below.

### GET /contacts
Returns an array of contacts modeled after contacts property in `db.json`.  
If you want to paginate, filter or sort the results, check json-server [documentation]((https://github.com/typicode/json-server#routes)) on how to.  

Response example:
```js
[
  {
    "email": "oscar@arnold.com",
    "favorite": false,
    "id": 1,
    "imagePath": "",
    "name": "Oscar Arnold",
    "phoneNumbers": [
      {
        "id": "sbyqce",
        "label": "home",
        "number": "+385123123123"
      },
      {
        "id": "thamfs",
        "label": "work",
        "number": "+385223223223"
      }
    ]
  },
  {
    "email": "isaiah@mcguire.com",
    "favorite": true,
    "id": 2,
    "imagePath": "",
    "name": "Isaiah McGuire",
    "phoneNumbers": [
      {
        "id": "kyqwau",
        "label": "home",
        "number": "+385987987987"
      },
      {
        "id": "eynlyu",
        "label": "work",
        "number": "+385678678678"
      }
    ]
  }
]
```

### GET /contacts/{id}
Returns a single contact by finding one in contacts array that matches the provided id.

Response example:
```js
{
  "email": "oscar@arnold.com",
  "favorite": false,
  "id": 1,
  "imagePath": "",
  "name": "Oscar Arnold",
  "phoneNumbers": [
    {
      "id": "sbyqce",
      "label": "home",
      "number": "+385123123123"
    },
    {
      "id": "thamfs",
      "label": "work",
      "number": "+385223223223"
    }
  ]
}
```

### POST /contacts
Creates a new contact. Returns the newly created contact.

### PUT /contacts/{id}
Updates an existing contact. Returns the updated contact.

### GET /static/{fileName}
Serves uploaded images.

### DELETE /contacts/{id}
Deletes an existing contact. Returns an empty object.

### POST /upload
Uploads the image.  
It expects `form-data` request with key named `file` and saves 2 images with hashed names, large one and a thumbnail.  

Response example:
```js
{
  image: '16f3eba2d9dc3ee63785fcf4197cd800.png',
  thumbnail: '16f3eba2d9dc3ee63785fcf4197cd800-thumb.png'
}
```