<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/annel18/air-quality-monitoring">
    <img src="./src/assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Air Quality Monitoring</h3>
  <p align="center">
    A multi-page react.js application that tracks the real-time air quality and forecast.
    <br />
    <a href="https://github.com/annel18/air-quality-monitoring"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://annel18.github.io/air-quality-monitoring/">View Demo</a>
    ·
    <a href="https://github.com/annel18/air-quality-monitoring/issues">Report Bug</a>
    ·
    <a href="https://github.com/annel18/air-quality-monitoring/issues">Request Feature</a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#cicd">CI/CD</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#production-server">Production server</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://annel18.github.io/air-quality-monitoring/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
* [![nodejs][Node.js]][nodejs-url]
* [![React][React.js]][React-url]
* [![Vite][Vite.dev]][Vite-url]
* [![Sass][Sass]][Sass-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Jest][Jest.js]][Jest-url]
* [![testing-library][testing-library]][ReactTesting-url]
* [![Cypress][Cypress]][Cypress-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally. -->
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://aqicn.org/data-platform/token/](https://aqicn.org/data-platform/token/)
2. Clone the repo
   ```sh
   git clone https://github.com/annel18/air-quality-monitoring.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```env
    API_KEY = 'ENTER YOUR API';
   ```
5. To run locally
    ```sh
   npm run dev
   ```
5. To run in prod
    ```sh
   npm run build
   npm run deploy
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. 
- Additional screenshots, 
- code examples,
- demos

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Testing information -->
## CI/CD
- This workflow will run tests using node and then publish a package to GitHub Packages when a release is created
For more information see: https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages

    [![build.yml][build.yml]][build.yml-url]

- Simple workflow for deploying static content to GitHub Pages

    [![static.yml][static.yml]][static.yml-url]

- Cypress runs tests in parallel with matrix strategy 

    [![cypress.yml][cypress.yml]][cypress.yml-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing
### Libraries
- React testing Library [![testing-library][testing-library]][ReactTesting-url]

### How to run test suites
- To run test
  ```sh
  npm run test
  ```
- Testing is part of the CI workflow, and automated test will take place on Push and Pull-Request from the main branch

- Unit tests will have to be written along coding new functions and features

### How to run tests with Cypress
- Installing 
```sh
cd /your/project/path
npm install cypress --save-dev
```
- Opening the app
```sh
npx cypress open
```
- To Run test 

Tests can be monitored on the cloud https://cloud.cypress.io/

### Mocking?
- mocking library?

### Third party rest-APIs
- This [API](https://aqicn.org/json-api/doc/#api-_) is provided by the World Air Quality Index project.
For more infomration, and for the terms of service, please refer to the [API overview](https://aqicn.org/api/) page.
- Before starting the project these various enpoints have be tested with [![Insomnia][Insomnia]][Insomnia-url]. Please replace the "demo" token with your own. Get a free API Key at [https://aqicn.org/data-platform/token/](https://aqicn.org/data-platform/token/)
    - https://api.waqi.info/feed/here/?token=demo
    - https://api.waqi.info/feed/shanghai/?token=demo
    - https://api.waqi.info/feed/geo:10.3;20.7/?token=demo
    - https://api.waqi.info/v2/map/bounds?latlng=39.379436,116.091230,40.235643,116.784382&networks=all&token=demo

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Production server
This static website is being hosted on GitHub Pages
https://annel18.github.io/air-quality-monitoring/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/annel18/air-quality-monitoring/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



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

Anne-Laure Guiot - annelaure.guiot@gmail.com

Project Link: [https://github.com/annel18/air-quality-monitoring](https://github.com/annel18/air-quality-monitoring)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/annel18/air-quality-monitoring.svg?style=for-the-badge
[contributors-url]: https://github.com/annel18/air-quality-monitoring/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/annel18/air-quality-monitoring.svg?style=for-the-badge
[forks-url]: https://github.com/annel18/air-quality-monitoring/network/members
[stars-shield]: https://img.shields.io/github/stars/annel18/air-quality-monitoring.svg?style=for-the-badge
[stars-url]: https://github.com/annel18/air-quality-monitoring/stargazers
[issues-shield]: https://img.shields.io/github/issues/annel18/air-quality-monitoring.svg?style=for-the-badge
[issues-url]: https://github.com/annel18/air-quality-monitoring/issues
[license-shield]: https://img.shields.io/github/license/annel18/air-quality-monitoring.svg?style=for-the-badge
[license-url]: https://github.com/annel18/air-quality-monitoring/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/annelaure-guiot
[product-screenshot]: ./src/assets/images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Vite.dev]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Node.js]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js
[nodejs-url]: https://nodejs.org/en
[Sass]: https://img.shields.io/badge/Sass-f4f6f7?style=for-the-badge&logo=Sass
[Sass-url]: https://sass-lang.com/
[Jest.js]: https://img.shields.io/badge/jest-16c213?style=for-the-badge&logo=jest
[Jest-url]: https://jestjs.io/
[Cypress]: https://img.shields.io/badge/cypress-f4f6f7?style=for-the-badge&logo=cypress
[Cypress-url]: https://www.cypress.io/
[testing-library]: https://img.shields.io/badge/testing_library-20232A?style=for-the-badge&logo=testinglibrary
[ReactTesting-url]: https://testing-library.com/
[build.yml]:https://github.com/annel18/air-quality-monitoring/actions/workflows/build.yml/badge.svg
[build.yml-url]:./.github/workflows/build.yml
[static.yml]:https://github.com/annel18/air-quality-monitoring/actions/workflows/static.yml/badge.svg
[static.yml-url]:./.github/workflows/static.yml
[cypress.yml]:https://github.com/annel18/air-quality-monitoring/actions/workflows/cypress.yml/badge.svg
[cypress.yml-url]:./.github/workflows/cypress.yml
[Insomnia]:https://img.shields.io/badge/insomnia-400dbf?style=for-the-badge&logo=insomnia
[Insomnia-url]:https://insomnia.rest/