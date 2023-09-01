<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center"><img src="./docs/header.jpeg"></div>

<h3 align="center">Michigan Facts</h3>

  <p align="center">
    <br />
    <a href="https://github.com/jclark1913/michigan-facts-ts"><strong>View documentation »</strong></a>
    <br />
    <br />
    <a href="https://michigan-facts-ts.vercel.app/facts">View Demo</a>
    ·
    <a href="https://github.com/jclark1913/michigan-facts-ts/issues">Report Bug</a>
    ·
    <a href="https://github.com/jclark1913/michigan-facts-ts/issues">Request Feature</a>
  </p>
</div>

<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/jclark1913/michigan-facts-ts)
![GitHub repo size](https://img.shields.io/github/repo-size/jclark1913/michigan-facts-ts)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jclark1913/michigan-facts-ts)
![GitHub contributors](https://img.shields.io/github/contributors/jclark1913/michigan-facts-ts)
![GitHub last commit](https://img.shields.io/github/last-commit/jclark1913/michigan-facts-ts)
![GitHub issues](https://img.shields.io/github/issues/jclark1913/michigan-facts-ts)
![GitHub](https://img.shields.io/github/license/jclark1913/michigan-facts-ts)

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
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]

Michigan Facts is a lightweight API for serving facts about the state of Michigan. Its primary purpose is to support a silly <a href="https://github.com/jclark1913/michigan-bot">discord bot</a> I built to educate/annoy my friends. I wrote Michigan Facts in Typescript using Express along with a database in PostgreSQL using Prisma, and as impressive as my Michigan trivia is I did lean on our friends at ChatGPT to help generate facts for the database.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<div align="center">

![Express][Express]
![Typescript][Typescript]
![PostgreSQL][PostgreSQL]
![ElephantSQL][ElephantSQL]
![Vercel][Vercel]
![Node.js][Node.js]
![Express][Express]
![Prisma][Prisma]
![ChatGPT][ChatGPT]

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

You can use the API by following this link <a href="michigan-facts-ts.vercel.app/facts"> to get a random fact.

If you want to build from source, follow these steps:

1. Clone repo

```bash
git clone https://github.com/jclark1913/michigan-facts-ts
```

2. Install dependencies

```bash
cd michigan-facts-ts
npm install
```

2. Create and seed the database using the prisma cli. (NOTE: You'll also need to update your `DATABASE_URL` environmental variable)

```bash
createdb michigan_facts
npx prisma generate
npx prisma db seed
```

3. Run the server (defaults to port `3001`)

```bash
npm run start
```

4. Visit `localhost:3001`. You can use the endpoint `/facts` for a random Michigan fact or visit `/facts/<id>` to see facts by their ID.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Justin Clark - [@JustinClarkJO](https://twitter.com/@JustinClarkJO) - jclarksummit@gmail.com

Project Link: [https://github.com/jclark1913/michigan-facts-ts](https://github.com/jclark1913/michigan-facts-ts)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* All 5 of the Great Lakes
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jclark1913/michigan-facts-ts.svg?style=for-the-badge
[contributors-url]: https://github.com/jclark1913/michigan-facts-ts/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jclark1913/michigan-facts-ts.svg?style=for-the-badge
[forks-url]: https://github.com/jclark1913/michigan-facts-ts/network/members
[stars-shield]: https://img.shields.io/github/stars/jclark1913/michigan-facts-ts.svg?style=for-the-badge
[stars-url]: https://github.com/jclark1913/michigan-facts-ts/stargazers
[issues-shield]: https://img.shields.io/github/issues/jclark1913/michigan-facts-ts.svg?style=for-the-badge
[issues-url]: https://github.com/jclark1913/michigan-facts-ts/issues
[license-shield]: https://img.shields.io/github/license/jclark1913/michigan-facts-ts.svg?style=for-the-badge
[license-url]: https://github.com/jclark1913/michigan-facts-ts/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: docs/main.png
[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white
[ElephantSQL]: https://img.shields.io/badge/ElephantSQL-2D9CDB?logo=elephantsql&logoColor=white
[Render]: https://img.shields.io/badge/Render-000000?logo=render&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?&logo=vercel&logoColor=white
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?&logo=typescript&logoColor=white
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?&logo=Prisma&logoColor=white
[ChatGPT]: https://img.shields.io/badge/chatGPT-74aa9c?&logo=openai&logoColor=white