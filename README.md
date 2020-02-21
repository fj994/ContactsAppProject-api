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
You can configure API response model by editing `seed.json` file.  
If you do so, please attach the modified file in the email, alongside the link to the frontend task.

## How does it work
This application uses json-server module under the hood and adds the image upload on top of it.  
On API startup, `db.json` file is going to be created from `seed.json`, and will be used as a database.  
Making POST, PUT, PATCH or DELETE requests will result with json-server automatically updating `db.json` file.  
**NOTE:** response examples look like data from `seed.json` config, if you re-configure it, responses will differ from whats shown below.

## Endpoints

### GET /contacts
Returns an array of contacts modeled after contacts property in `seed.json`.  

#### Pagination
If you want to work with pagination, filter or sort the results, check json-server [documentation](https://github.com/typicode/json-server#routes) on how to.  
To parse the link headers in pagination response, feel free to use [parse-link-header](https://www.npmjs.com/package/parse-link-header).

Response example:
```js
[
  {
    "email": "addie.hernandez@gmail.com",
    "favorite": false,
    "id": 1,
    "image": {
      "large": "",
      "thumbnail": ""
    },
    "name": "Addie Hernandez",
    "phoneNumbers": [
      {
        "id": "ivdsva",
        "label": "home",
        "number": "+385510101010"
      },
      {
        "id": "hopews",
        "label": "work",
        "number": "+38501010101"
      }
    ]
  },
  {
    "email": "oscar.arnold@gmail.com",
    "favorite": false,
    "id": 2,
    "image": {
      "large": "",
      "thumbnail": ""
    },
    "name": "Oscar Arnold",
    "phoneNumbers": [
      {
        "id": "ivdsva",
        "label": "home",
        "number": "+385521212121"
      },
      {
        "id": "hopews",
        "label": "work",
        "number": "+38512121212"
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
  "email": "addie.hernandez@gmail.com",
  "favorite": false,
  "id": 1,
  "image": {
    "large": "",
    "thumbnail": ""
  },
  "name": "Addie Hernandez",
  "phoneNumbers": [
    {
      "id": "ivdsva",
      "label": "home",
      "number": "+385510101010"
    },
    {
      "id": "hopews",
      "label": "work",
      "number": "+38501010101"
    }
  ]
}
```

### POST /contacts
Creates a new contact. Returns the newly created contact.

### PUT /contacts/{id}
Updates an existing contact. Returns the updated contact.

### DELETE /contacts/{id}
Deletes an existing contact. Returns an empty object.

### GET /static/{fileName}
Serves uploaded images.

### POST /upload
Uploads the image.  
It expects `form-data` request with key named `file` and saves 2 images with hashed names, large one and a thumbnail.  

Response example:
```js
{
  large: '16f3eba2d9dc3ee63785fcf4197cd800.png',
  thumbnail: '16f3eba2d9dc3ee63785fcf4197cd800-thumb.png'
}
```