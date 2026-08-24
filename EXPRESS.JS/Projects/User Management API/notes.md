//User Management API
Create users {post}
Get users   {get}
Get user by ID  {get using req.params}
Update user
Delete user
Return proper HTTP status codes

POST   /users
GET    /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id

server.js --> Routes --> controller --> user.json

/*
{
    userId:Date.now().tostring()
    name:
    email:
    age:
}
*/