<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rickyli1010/shareme">
    <img src="shareme_frontend/src/assets/logo.png" alt="Logo" width="304" height="63">
  </a>

<h3 align="center">ShareMe Social Media Application</h3>

  <p align="center">
    This is a Social Media application built with React, Tailwind & Sanity
    <br />
    <a href="https://github.com/rickyli1010/shareme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://share-me-rl.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/rickyli1010/shareme/issues">Report Bug</a>
    ·
    <a href="https://github.com/rickyli1010/shareme/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#start">Start</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://share-me-rl.netlify.app/)

Shareme is a social media platform and visual discovery engine where users can discover and save ideas for various interests. It allows users to create and manage collections of visual bookmarks, known as "pins," that can include images, videos, and other media. These pins are organized on personalized boards, and users can explore content created by others.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Tailwind][Tailwindcss.com]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CLONE OR DOWNLOAD -->
## clone or download
```terminal
$ git clone https://github.com/rickyli1010/shareme.git
$ yarn # or npm i
```

<!-- PROJECT STRUCTURE -->
## project structure
```terminal
LICENSE
package.json
shareme_backend/
   package.json
shareme_frontend/
   package.json
   .env (to create .env, check [prepare your secret session])
...
```


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)
- [Sanity](https://www.npmjs.com/package/sanity)
- [TailwindCSS](https://www.npmjs.com/package/tailwindcss)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

### Server-side usage(PORT: 3333)

```terminal
$ cd shareme_backend   // go to server folder
$ npm i       // npm install packages
$ sanity start // run it locally
```

### Client-side usage(PORT: 3000)

#### Prepare your secret

run the script at the first level:

Requires: 
- Google API Token for Google Login
- Sanity Project ID for connecting to Sanity
- Sanity Token for Sanity Auth

```terminal
// in the root level
$ cd shareme_Frontend
$ echo "REACT_APP_GOOGLE_API_TOKEN=YOUR_REACT_APP_GOOGLE_API_TOKEN" >> src/.env
$ echo "REACT_APP_SANITY_PROJECT_ID=YOUR_REACT_APP_SANITY_PROJECT_ID" >> src/.env
$ echo "REACT_APP_SANITY_TOKEN=YOUR_REACT_APP_SANITY_TOKEN" >> src/.env
```

### Start

```terminal
$ cd shareme_frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ricky Li - rickyli0321@gmail.com

Project Link: [https://github.com/rickyli1010/shareme](https://github.com/rickyli1010/shareme)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/rickyli1010/shareme.svg?style=for-the-badge
[contributors-url]: https://github.com/rickyli1010/shareme/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rickyli1010/shareme.svg?style=for-the-badge
[forks-url]: https://github.com/rickyli1010/shareme/network/members
[stars-shield]: https://img.shields.io/github/stars/rickyli1010/shareme.svg?style=for-the-badge
[stars-url]: https://github.com/rickyli1010/shareme/stargazers
[issues-shield]: https://img.shields.io/github/issues/rickyli1010/shareme.svg?style=for-the-badge
[issues-url]: https://github.com/rickyli1010/shareme/issues
[license-shield]: https://img.shields.io/github/license/rickyli1010/shareme.svg?style=for-the-badge
[license-url]: https://github.com/rickyli1010/shareme/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ricky1010
[product-screenshot]: https://github.com/rickyli1010/shareme/assets/29339402/9f6b365a-c775-4905-8b4b-c9cfea152f53
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[TailwindCSS.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/ 
