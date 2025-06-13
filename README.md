# Test Automation Framework using Javascript

This project is a sample test automation framework for the GenAI Application Builder using JavaScript, Selenium WebDriver, Mocha/Chai, and GitHub Actions for CI.

## Features

- Login test flow for GenAI platform
- Page Object Model (POM) structure
- Mocha test runner with Chai assertions
- CI-ready structure for GitHub Actions
- Screenshot capture on failure (future enhancement)

## Stack

- JavaScript (Node.js)
- Selenium WebDriver
- Mocha + Chai
- Page Object Model (POM)
- Docker + GitHub Actions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the test:
```bash
npx mocha tests/*.js
```

## Directory Structure

- `/tests` – Mocha test files
- `/framework` – POM classes
- `/reports` – Test results output

## Author

Pubudini Abegunawardana
