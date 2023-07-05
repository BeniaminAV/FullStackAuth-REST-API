# FullStackAuth-CRUD-
BackEnd (server) + Front-End (client)

This application is built using both back-end and front-end technologies. On the back-end side, 
we have utilized Node.js with TypeScript, Nodemon, and Express, which includes a back-end with 
a REST API for authentication connected to a MongoDB database. As for the front-end, it is developed
using Next.js and React. The purpose of this application is to create a back-end server that provides 
API information, which is then connected to the client-side.

 !!! Add your MONGO_URL => server => src/index.ts

To start the backend server, please use the command "npm start." For the frontend application, on the other hand, please run the command "npm run dev."

Back-End API:
Home: http://localhost:8080/ <br/>
Post: http://localhost:8080/data/posts  <br/>
Comments: http://localhost:8080/data/comments  <br/>
Todos : http://localhost:5000/data/todos  <br/>

API Authentication  <br/>
Register: http://localhost:8080/auth/register  <br/>
Login: http://localhost:8080/auth/login  <br/>
Get: http://localhost:8080/users  <br/>
Delete: http://localhost:8080/users/:id  <br/>
Updata: http://localhost:8080/users/:id  <br/>
