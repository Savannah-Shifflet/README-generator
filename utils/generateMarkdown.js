// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, username, repo) {
  if(license === 'No license was used'){
    return '';
  } else {
    return `![${license} badge](https://img.shields.io/github/license/${username}/${repo})`;
  }
}

// Returns the license section of README
// If there is no license, returns N/A
function renderLicenseSection(license) {
  if (license === 'No license was used'){
    return 'N/A';
  } else {
    return `This project is licensed using the ${license}.`;
  }
}

// Function to generate markdown for README with key sections
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.username, data.repo)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions 
  ${data.question} \n
  My GitHub profile is [${data.username}](https://github.com/${data.username}) and my email is ${data.email}.`
}

module.exports = generateMarkdown;
