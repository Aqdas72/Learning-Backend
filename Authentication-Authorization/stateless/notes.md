* stateless vs stateful ??
stateless does not store any login session information on the server side
whereas stateful does store session information on the server side, allowing for a continuous user experience across multiple requests.

stateful                              
Client
  │
  │ session ID
  ▼
Server
  │
  │ lookup session
  ▼
Session Store
  │
  ▼
User

stateless
Client
  │
  │ JWT
  ▼
Server
  │
  │ verify signature
  ▼
User information