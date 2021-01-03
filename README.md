<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://tpps88206.github.io">tpps88206.github.io</a>
    <br />
    <br />
    <a href="https://michaelhsu.me">About Me</a>
    ·
    <a href="https://github.com/tpps88206/home/issues">Report Bug</a>
    ·
    <a href="https://github.com/tpps88206/home/issues">Request Feature</a>
  </p>
</p>

![GitHub contributors](https://img.shields.io/github/contributors/tpps88206/home?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/tpps88206/home?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/tpps88206/home?style=for-the-badge)](https://github.com/tpps88206/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/tpps88206/home?color=ffcc66&style=for-the-badge)](https://github.com/tpps88206/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/tpps88206/home?style=for-the-badge)](https://github.com/tpps88206/home/blob/master/LICENSE)

[![Site preview](/public/social-image.gif)](https://tpps88206.github.io/)

## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)
- [Contributing 🙌](#contributing-)
- [Issues](#issues)
- [Upcoming Features / Improvements 🔗](#upcoming-features-/-improvements-)
- [Showcase 🚀](#showcase-)
- [Versão em Português :brazil:](#versao-em-portugues-)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Leadership (optional)
  - Paragraph
  - Carousel images
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at cool96482@hotmail.com.com.

## Contributing 🙌

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Issues

If anyone is looking to make some contribution, the following are issues that you can solve:

- [ ] UI improvements
- [ ] Code optimization
- [x] Routing
- [ ] SEO
