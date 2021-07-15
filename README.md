# Alaya mern dev challenge

## Setup project 🚀

In order to run the project, you will need to have installed Node.js and mongoDb locally as a service.

This project is composed by 2 diferent projects inside one: the server and the client and you will need to install the dependencies of each project with `npm install` inside the root directory of each project. After you had installed the dependencies, you will be able to run each project in a separate terminal.

```sh
cd server
npm i or npm install
node index or nodemon index
```

```sh
cd client
npm i or npm install
npm start
```

## Project configuration ⚙️

This project was forked from [Alaya mern dev challenge](https://github.com/Onigam/mern-stack) that was already created with [Create React App](https://create-react-app.dev/) and had some features on it.

I added some packages that I like to use in order to mantain all my components and files syntactically equal and also to know and fix some issues quickly.

- ESLint
- Prettier

On the server project I used Passport with a JWT policy to manage the user session. So in the server project I have this modules among others:

- jsonwebtoken
- passport
- passport-jwt
- passport-local
- bcrypt

## Refactoring the project 📚

I refactored the client project a little bit

- src/components
- src/pages
- src/redux

## Challenge 🎯

This challenge has two parts. We have to do a sign up and log in component and manage this functionality and also we have to enable the upload of an image when adding a post.

### User account management 👩‍💻

I have complete the sign up and log in functionality and some implementations I have left for this challenge are:

- Mantain the session of the user even if refreshing the page
- Doing log out only when clicking on the `logout` navigation button
- Disable deleting a post unless it's the author of it.

### Picture upload 🏞️

I have completed the picture upload functionality. I made it with Cloudinary as mentioned at the original project.

I still have to:

- Apply some CSS styles in order to see all the images with the same size or at least smaller than they are now.
