**Authentication API**

-  Register 
-  Login 
-  Password hashing 
-  Generate authentication token 
-  Protected routes 
-  Logout 
-  Cookies


POST   /auth/register
POST   /auth/login
GET    /auth/profile
POST   /auth/logout


**register**
post - getting data from user to server
{
    name,
    email,
    password,
}

and then we do Hash password with bcrypt

**login**
post -
{
    email,
    password,
}
get data --> find user --> Compare password with bcrypt --> generate auth token --> store in cookie

**protected route**
GET /auth/profile
        ↓
Read token from cookie
        ↓
Verify token
        ↓
Authenticated?
    ↓          ↓
   YES         NO
    ↓           ↓
 Profile       401

**logout**
POST /auth/logout
        ↓
Clear authentication cookie
        ↓
Logged out


authentication-api/
│
├── src/
│   ├── app.js
│   │
│   ├── routes/
│   │   └── auth.routes.js
│   │
│   ├── controller/
│   │   └── auth.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js //authentication of token 
│   │
│   └── utils/
│       ├── file.utils.js
│       └── token.utils.js //generating of token
│
└── package.json

