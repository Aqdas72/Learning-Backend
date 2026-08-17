# Express.js CRUD API Notes

This project is a simple REST API built using **Express.js**. It demonstrates the basic HTTP methods and how to handle request data using `req.params`, `req.query`, and `req.body`.

## Features

### GET Request

Used to retrieve data from the server.

```js
app.get("/", (req, res) => {
    res.send("Hello World");
});
```

### Route Parameters (`req.params`)

Used to identify a specific resource through the URL.

Example URL:

```text
/api/v1/users/1/Aqdas
```

Access values using:

```js
req.params.id
req.params.name
```

### Query Parameters (`req.query`)

Used for filtering, searching, and sorting data.

Example URL:

```text
/ users/search?subject=Math
```

Access values using:

```js
req.query.subject
```

### POST Request

Used to create new data on the server.

```js
app.post("/users", (req, res) => {
    // Create new user
});
```

Data is received through:

```js
req.body
```

### PUT Request

Used to update an entire resource.

```js
app.put("/users/:id", (req, res) => {
    // Update user
});
```

### PATCH Request

Used to update specific fields of a resource.

```js
app.patch("/users/:id", (req, res) => {
    // Partial update
});
```

### DELETE Request

Used to remove data from the server.

```js
app.delete("/users/:id", (req, res) => {
    // Delete user
});
```

## Important Express Concepts

### Middleware

```js
app.use(express.json());
```

Parses incoming JSON data and makes it available inside:

```js
req.body
```

### Status Codes

```js
res.status(201)
```

Common status codes:

* `200` → Success
* `201` → Resource Created
* `404` → Resource Not Found
* `500` → Internal Server Error

### Useful Array Methods

#### find()

Returns the first matching element.

```js
users.find(user => user.name === name);
```

#### filter()

Returns all matching elements.

```js
users.filter(user => user.subject === subject);
```

#### findIndex()

Returns the index of a matching element or `-1` if not found.

```js
users.findIndex(user => user.id === id);
```

#### splice()

Removes elements from an array.

```js
users.splice(index, 1);
```

## Request Flow

```text
Client Request
      ↓
 Middleware
      ↓
   Route
      ↓
 Business Logic
      ↓
 Server Response
```

This project covers the fundamentals of building REST APIs with Express.js, including CRUD operations, route parameters, query parameters, middleware, and status codes.
