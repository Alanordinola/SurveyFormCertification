[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Alanordinola/SurveyFormCertification">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Survey Form Certification</h3>

<p align="center">
A modern, responsive survey form with elegant design and smooth user experience

<a href="https://github.com/Alanordinola/SurveyFormCertification"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://alanordinola.github.io/SurveyFormCertification/">View Demo</a>
    &middot;
    <a href="https://github.com/Alanordinola/SurveyFormCertification/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Alanordinola/SurveyFormCertification/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Survey Form web][product-web]](https://example.com)


This **Survey Form Certification** project transforms the traditional survey experience into an engaging user interface. Originally developed as a FreeCodeCamp project, I've enhanced it with:

- Modern Design System - Clean, professional appearance with harmonious color scheme
- Responsive Layout - Adapts seamlessly to all device sizes
- Enhanced User Experience - Smooth animations and intuitive form interactions

**Key Features:**

- Professional UI Design - Elegant form controls with consistent styling
- Built-in Validation - HTML5 validation with visual feedback
- Smooth Animations - Pleasant hover, focus, and transition effects
- Custom Form Elements - Styled radio buttons, checkboxes, and dropdowns


This project demonstrates how to create professional survey forms with modern web technologies



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![HTML5][HTML5-shield]][HTML5-url]
* [![CSS3][CSS3-shield]][CSS3-url]
* [![Inter Font][Inter-shield]][Inter-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Launch Registration Form in minutes! Follow these simple steps to set up the project locally.

### Prerequisites

- Any modern browser (Chrome, Firefox, Edge)
- Git (optional, for version control)
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/SurveyFormCertification.git
   ```

2. **Navigate to project folder:**
```sh
cd SurveyFormCertification
```

3. **Open in browser:**

Double-click `index.html` or run
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Explore the survey form's interactive features:


1. **Form Navigation**  
    The form is organized into logical sections with clear labeling and intuitive flow.

2. **Field Types**
  

  - **Text inputs:** Name and email with validation
  - **Number input:** Age with range validation (13-120)
  - **Dropdown:** Satisfaction level selection
  - **Radio buttons:** Recommendation likelihood
  - **Checkboxes:** Improvement areas (multiple selection)
  - **Textarea:** Additional comments with ample space

3. **Validation Features**
   ``` html 
   <input type="email" required>            <!-- Email format validation -->
   <input type="number" min="13" max="120"> <!-- Age range validation -->
   <input type="text" required>             <!-- Required field validation -->
    ```


4. **Customization.**
   Modify the theme colors in ` styles.css:`
   ```css
   :root {
     --primary-color: #4361ee;     /* Main brand color */
     --accent-color: #f72585;      /* Accent color for highlights */
     --light-color: #f8f9fa;       /* Light background color */
     --dark-color: #212529;        /* Dark text color */
   }
   ```

5. **Responsive Design.** 
    Test the form on different screen sizes to see how it adapts:

  - Desktop: Optimal form width and spacing
  - Tablet: Adjusted padding and font sizes
  - Mobile: Stacked layout with touch-friendly controls
    
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ]  **UI/UX Enhancements**
  - [x]  Modern color scheme and styling
  - [ ]  Dark/light mode toggle
  - [ ]  Multi-step form progression
  - [ ]  Real-time validation feedback
  - [ ]  Field transition animations
  - [ ]  Micro-interactions for form controls
- [ ]  **Core Functionality**
  - [x]  Basic HTML5 form validation
  - [ ]  Real-time validation with visual feedback
  - [x]  Fully responsive layout
  - [ ]  Progressive form autosave
  - [ ]  Form data export functionality
- [ ]  **User Experience**
  - [ ]  Multi-step progress indicator
  - [ ]  Context-aware error messages
  - [ ]  Smart field suggestions
  - [x]  Keyboard navigation support
  - [ ]  Character counters for text fields
  - [ ]  Form saving/resume functionality
- [ ]  **Technical Improvements**
  - [ ]  User preference persistence (localStorage)
  - [ ]  Backend API integration
  - [ ]  Jest unit test suite
  - [ ]  Performance benchmarking
  - [ ]  Cross-browser compatibility testing
  - [ ]  Accessibility audit compliance
- [ ]  **Additional Features**
  - [ ]  Multi-language support
  - [ ]  Form analytics tracking
  - [ ]  Custom form theme builder
  - [ ]  Form template system
  - [ ]  Response data visualization

See the [open issues](https://github.com/Alanordinola/SurveyFormCertification/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

####  Reporting Issues
Open an [issue](https://github.com/AlanOrdinola/SurveyFormCertification/issues) with:
- `bug` for unexpected behavior
- `enhancement` for feature requests
- `design` for UI/UX improvements

####  Code Contributions
1. Fork the Repository
2. Clone your Fork (`git clone https://github.com/your-username/RegistrationForm.git`)

3. Create your Feature Branch (`git checkout -b feature/your-feature`)

4. Commit your Changes (`git commit -m 'Add some feature'`)

5. Push to your Branch (`git push origin feature/your-feature`)

6. Open a Pull Request

### Top contributors:

<a href="https://github.com/Alanordinola/SurveyFormCertification/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Alanordinola/SurveyFormCertification" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Alan Ordinola - [Linkedin](https://www.linkedin.com/in/alan-ordinola-10026a196/)

Project Link: [https://github.com/Alanordinola/SurveyFormCertification](https://github.com/Alanordinola/RegistrationForm)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Hecho con ❤️ para el [curso de freeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/)  
[![FCC](https://img.shields.io/badge/🚀_Estudiando_en_FCC-0A0A23)](https://www.freecodecamp.org/)

[Best-README-Template](https://github.com/othneildrew/Best-README-Template) - Por la estructura base de este README

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Alanordinola/SurveyFormCertification.svg?style=for-the-badge&color=green
[contributors-url]: https://github.com/Alanordinola/SurveyFormCertification/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Alanordinola/SurveyFormCertification.svg?style=for-the-badge&color=blue
[forks-url]: https://github.com/Alanordinola/SurveyFormCertification/network/members
[stars-shield]: https://img.shields.io/github/stars/Alanordinola/SurveyFormCertification.svg?style=for-the-badge&color=yellow
[stars-url]: https://github.com/Alanordinola/SurveyFormCertification/stargazers
[issues-shield]: https://img.shields.io/github/issues/Alanordinola/SurveyFormCertification.svg?style=for-the-badge&color=red
[issues-url]: https://github.com/Alanordinola/SurveyFormCertification/issues
[license-shield]: https://img.shields.io/github/license/Alanordinola/SurveyFormCertification.svg?style=for-the-badge&color=green
[license-url]: https://github.com/Alanordinola/SurveyFormCertification/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0A66C2
[linkedin-url]: https://www.linkedin.com/in/alan-ordinola-10026a196/
[product-web]: images/web.gif
[HTML5-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS3-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[Inter-shield]: https://img.shields.io/badge/Inter-000000?style=for-the-badge&logo=google-fonts&logoColor=white
[Inter-url]: https://rsms.me/inter/