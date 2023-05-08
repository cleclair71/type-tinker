  ![GitHub license](https://img.shields.io/badge/license-MIT-pink.svg)
  <a name="readme-top"></a>
 <br />
 <div align="center">
 <h1 align="center">JATE</h1>
    <p align="center">
      Just another text editor
    </p>
  
<br />
<details><summary>Table of Contents;</summary>

* [About the Project](#description) 

* [Added Features](#features)

* [Installation](#installation) 
 
* [Usage](#usage) 

* [Contributing](#contributing)
 
* [license](#license)

* [Questions](#questions)

</details>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="description"></a>
## :rocket: About The Project
<p align="center">
  <img src="/assets/screen.JPG"/>
</p>
JATE is a singe-page application text editor that meets the criteria of a Progressive Web Application (PWA).  It includes data persistence techniques that serve as redundancy in case one of the options is not supported by the browser and the application will function offline.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="features"></a>

## :star: Features

 - Uses IndexedDB to create an object store and includes both GET and PUT methods
 - Works without an internet connection
 - Automatically saves content inside the text editor when the DOM window is unfocused
 - Bundled with webpack
 - Creates a service worker with workbox that caches static assets
 - Uses Babel in order to use async/await
 - Generates a manifest.json file using the WebpackPwaManifest plug-in
 - Can be installed as a Progressive Web Application

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="installation"></a>

## :hammer_and_wrench: Installation

1. Visit the deployed website
2. Click install to download app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

  <a name="usage"></a>

## :computer: Usage

JATE text editor offers users the ability to create, edit, and save notes or code snippets with full support for next-generation JavaScript. 

As content is entered into the text editor and the DOM window is exited, the application will automatically save your work using IndexedDB for secure storage. 

Whether the application is closed or reopened, previously saved content can be easily retrieved from the IndexedDB storage. 

Users can also install the web application onto their desktops by selecting the 'Install' button within the app, which creates a convenient shortcut icon for quick access to the text editor.

 To enhance performance and provide offline access, the application is built with progressive enhancement, utilizing a registered service worker with Workbox to cache static assets and subsequent pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  

 <a name="contributing"></a>

## :handshake: Contributing

Thank you for your interest in contributing to this project! By contributing, you can help make this project even better for everyone.

### How to Contribute

If you would like to contribute to this project, please follow these steps:
      
1. **Fork the Project:** Fork this project to your own GitHub account.

2. **Create your Feature Branch:** Create a branch for your feature using:
```bash 
git checkout -b your-branch-name.
```
3. **Commit your Changes:** Commit your changes using:
```bash 
git commit -m "Your commit message here"
```
4. **Push to the Branch:** Push your changes to the branch using:
```bash 
git push origin your-branch-name
```
5. **Open a Pull Request:** Open a pull request to merge your changes into the main branch of the original project.

### Credits

 - idb - a lightweight wrapper around the IndexedDB API
 - webpack - a module bundler for JavaScript applications
 - workbox - a set of libraries and build tools for adding offline support to web applications
 - WebpackPwaManifest - a plugin for generating a Web App Manifest for your Progressive Web App

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="license"></a>

## :clipboard: License
MIT
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="questions"></a>

## :mailbox_with_no_mail: Questions?

If you have any questions about this project, please don't hesitate to reach out to me. I'm always happy to help and provide additional information.

### How to Ask a Question

1. **Check the existing documentation:** Before asking a question, please take a moment to review the existing documentation. Your question may already be answered in the README file or other project documentation.

2. **Create a new issue:** If you can't find the answer to your question in the documentation, please create a new issue in the project's issue tracker. Be sure to provide as much detail as possible about your question, including any relevant code snippets or screenshots.

3. **Contact cleclair71 directly:** If you prefer to contact me directly, you can do so by sending me an email at cassieleclair71@gmail.com. Please include "Question about README Generator" in the subject line so that I can quickly identify your message.
   
### :pray: Feedback and Suggestions

I welcome feedback and suggestions for this project. If you have ideas for how to improve the project, please feel free to create a new issue or contact me directly. Your input is greatly appreciated!
 
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
