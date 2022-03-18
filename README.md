[![CircleCI](https://circleci.com/gh/rpp31-boc-lachesis/neighbr/tree/master.svg?style=shield&circle-token=8a4b91616d339b1059983589100b52eecf2f2d03)](https://circleci.com/gh/rpp31-boc-lachesis/neighbr/tree/master)
# 🤝 Welcome to `Neighbr`!
### A Community-Building Application For All Your Needs
<img align="right" alt="house in neighborhood" src="https://drive.google.com/uc?export=view&id=1kkKcSb1nXsnBaBPYV83IwauRRhqGaonu" />
<hr />

## 📋 Features
- Signup
- Login
- User Profiles
- Requester Dashboard
- Runner Dashboard
- Requester Status Window
- Runner Status Window

## 💾 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/rpp31-boc-lachesis/neighbr.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## ⚗️ Usage & Examples
1. Signup/Login
2. Request or run an errand
3. Track your progress
4. Thank your neighbor
5. View your profile or others

## 🧪 Running Tests
Our test suite is set up with Jest, React Testing Library, and Mock Service Worker.
<br />
To run the test suite in development, simply run:

```bash
  npm test
```
or, when deploying via your CI/CD pipeline:
```bash
  npm test:ci
```

## ⛰️ Environment
- Custom environment variables are available for connecting to our deployed database, or configuring your own: <br />
`DB_URI=mongodb://mongodev.neighbr.site:51234/neighbr`

- Auth tokens are setup with JWT for your convenience: <br />
`jwtSecret=jwtauthsecret`

## ⚙️ Optimizations
1. Bundling of React code and all media assets with Webpack
2. Use of compression middleware for faster payload transfers
3. Performance-tuned database queries
4. Use of Passport JS for secure authentication and reduction of malicious behavior
5. Containerization for ease of deployment and scaling
6. Use of React Router for faster page loads and seamless user experience
7. Continuous integration and continuous deployment for faster development and shipment
8. NGINX placed as proxy server for security enhancement and future load-balancing & caching

## 💻 Technologies & Tools
<div align="left">
  <a href="https://reactjs.org/">
    <img alt="React" src="https://img.shields.io/badge/React%20-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" />
  </a>
  <a href="https://mui.com/">
    <img alt="Material Design" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" />
  </a>
  <a href="https://reactrouter.com/">
    <img alt="React Router" src="https://img.shields.io/badge/react%20router%20-%23CA4245.svg?&style=for-the-badge&logo=react%20router&logoColor=white" />
  </a>
  <a href="https://nodejs.org/en/">
    <img alt="Node JS" src="https://img.shields.io/badge/Node%20JS%20-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
  </a>
  <a href="https://expressjs.com/">
    <img alt="Express" src="https://img.shields.io/badge/Express%20-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white" />
  </a>
  <a href="https://www.mongodb.com/">
    <img alt="Mongo DB" src="https://img.shields.io/badge/MongoDB-%2347A248.svg?&style=for-the-badge&logo=mongodb&logoColor=white" />
  </a>
  <a href="https://www.nginx.com/">
    <img alt="NGINX" src="https://img.shields.io/badge/nginx-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white" />
  </a>
  <a href="https://jestjs.io/">
    <img alt="Jest Docs" src="https://img.shields.io/badge/Jest%20-%23C21325.svg?&style=for-the-badge&logo=Jest&logoColor=white" />
  </a>
  <a href="https://testing-library.com/">
    <img alt="Testing Library Docs" src="https://img.shields.io/badge/testing%20library%20-%23E33332.svg?&style=for-the-badge&logo=testing%20library&logoColor=white" />
  </a>
     <a href="https://git-scm.com/">
    <img alt="Git Docs" src="https://img.shields.io/badge/git%20-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/">
    <img alt="NPM Docs" src="https://img.shields.io/badge/npm%20-%23CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white" />
  </a>
  <a href="https://www.vim.org/">
    <img alt="Vim Docs" src="https://img.shields.io/badge/vim%20-%23019733.svg?&style=for-the-badge&logo=vim&logoColor=white" />
  </a>
  <a href="https://webpack.js.org/">
    <img alt="Webpack Docs" src="https://img.shields.io/badge/Webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black" />
  </a>
  <a href="https://babeljs.io/">
    <img alt="Babel Docs" src="https://img.shields.io/badge/babel%20-%23F9DC3E.svg?&style=for-the-badge&logo=babel&logoColor=black" />
  </a>
  <a href="https://ubuntu.com/">
    <img alt="Ubuntu Docs" src="https://img.shields.io/badge/ubuntu%20-%23E95420.svg?&style=for-the-badge&logo=ubuntu&logoColor=white" />
  </a>
  <a href="https://aws.amazon.com/">
    <img alt="AWS Docs" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
  </a>
  <a href="https://www.docker.com/">
    <img alt="Docker Docs" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
  </a>
 <a href="https://circleci.com/">
   <img alt="Circle CI Docs" src="https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white" />
 </a>
<a href="https://www.passportjs.org/">
  <img alt="Passport JS Docs" src="https://img.shields.io/badge/passport-%2334E27A.svg?style=for-the-badge&logo=passport&logoColor=white" />
</a>
<a href="https://www.figma.com/">
  <img alt="Figma Docs" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
</a>
<a href="https://www.figma.com/">
  <img alt="Figma Docs" src="https://img.shields.io/badge/mapbox-%23000000.svg?style=for-the-badge&logo=mapbox&logoColor=white" />
</a>
</div>

* [Mongoose](https://mongoosejs.com/)


## 🛠 Skills
- RESTful API architecture
- Modular controllers
- Object relational database management
- Secure authentication and sign-up
- Request and run location tracking
- Responsive web design / mobile friendly
- Dynamic and conditional rendering
- Map navigation
- High test coverage
- Containerization
- Continuous integration and continuous deployment

## 🤖 Contributors
- Git Hub:
* [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rpp31-boc-lachesis/neighbr/blob/master/README.md)
- Jake Caughern - Architecture Owner
* [![linkedin](https://img.shields.io/badge/Jake.Caughern-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jake-caughern/)
- Cameron Colaco - Software Engineer
* [![linkedin](https://img.shields.io/badge/Cameron.Colaco-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cameroncolaco/)
- Josh Fuqua - Product Manager
* [![linkedin](https://img.shields.io/badge/Josh.Fuqua-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joshdfuqua/)
- Michael Lapid - UI Owner
* [![linkedin](https://img.shields.io/badge/Michael.Lapid-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/michaeljohnlapid/)
- Yitong Liu - Software Engineer
* [![linkedin](https://img.shields.io/badge/Yitong.Liu-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yitongl/)
- Maxine Majnaric - Software Engineer
* [![linkedin](https://img.shields.io/badge/Maxine.Majnaric-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxinemajnaric/)
- Mary Miyamoto - Software Engineer
* [![linkedin](https://img.shields.io/badge/Mary.Miyamoto-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mary-miyamoto/)

## 🔗 Links
- Visit our homepage!
[Neighbr](https://neighbr.site/)

## 📷 Screenshots
* ### **Authorization / Authentication flow**
   ![auth-neighbr](https://user-images.githubusercontent.com/64869554/156875923-9b985bb9-a6f3-4555-9de4-7568256281fe.jpg)
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->
* ### **Screenshot:**
<!-- ![App Screenshot](https://drive.google.com/uc?export=view&id=<ADD_ME>) -->

## 🔊 Special Acknowledgements
 - [Hack Reactor](https://www.hackreactor.com/)
    * A special thank you to Hack Reactor!
