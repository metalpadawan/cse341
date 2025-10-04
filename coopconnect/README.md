# CoopConnect API

CoopConnect is a Node.js + Express API for managing cooperatives, users, posts, and contributions.  
Built for CSE 341 Final Project (BYU-I).

---

## Features
- User registration & authentication (JWT)
- Cooperative management
- CRUD for users, cooperatives, posts, contributions
- MongoDB database with Mongoose
- API documentation with Swagger at `/api-docs`
- Security middleware (Helmet, CORS, bcrypt)

---

## Project Setup

### 1. Clone repo
```bash
git clone https://github.com/<your-team-repo>/CoopConnect.git
cd CoopConnect
2. Install dependencies
bash
Copy code
npm install
3. Configure environment
Create a .env file in the root folder:


PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://CoopConnnect:Ud7203182003@cluster0.dnlxr0l.mongodb.net/CoopConnectDB?retryWrites=true&w=majority
JWT_SECRET=supersecretjwtkey
4. Run server

npm run dev   # with nodemon (recommended)
npm start     # normal start
API Documentation
Swagger is available at:

bash
Copy code
http://localhost:5000/api-docs
Team Roles
Uduakobong Okonah: Users & Posts CRUD, repo setup, Swagger docs for users & posts

Emmanuel Ndem: Cooperatives & Contributions CRUD, MongoDB setup, Swagger docs for coops & contributions

Both: JWT authentication, testing, video presentation

License
MIT