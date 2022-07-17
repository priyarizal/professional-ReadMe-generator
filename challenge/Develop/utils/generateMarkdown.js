// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licensePicked = ''

  if (license === 'MIT') {
    licensePicked = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === 'ISC') {
    licensePicked = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  if (license === 'IBM') {
    licensePicked = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if (license === 'BSD-3') {
    licensePicked = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  return (licensePicked)

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ${renderLicenseBadge(data.License)}

#Table of Content
- [Description](#Description)
- [Installation](#Installation)
- [Instructions](#Instructions)
- [Technologies](#Technologies)
- [Usage](#Usage)
- [License](#License)
- [Contributions](#Contributions)
- [Github](#Github)
- [Email](#Email)
- [LinkedIn](#LinkedIn)

## Description
${data.Description}

## Instructions
${data.Instructions}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Technologies
${data.Technologies}

## Contributions
${data.Contributions}

## Github
${data.Github}

## Email
${data.Email}

## LinkedIn
${data.LinkedIn}

`;
}

module.exports = generateMarkdown;
