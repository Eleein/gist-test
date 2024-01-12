# GIST-TEST
## :boom: What is it all about?
This project contains sample set of E2E test cases for creating and listing gists.

## Pre-requirements

It is required to have git, Node.js, and npm installed to clone and run this project.
You will also need a GitHub account with a username and a password. And for the API tests a Github token
is required with permissions to read and write on Gist. 

A final requirement, for the use of sensitive data you should create a cypress.env.json
file. This file should NOT be version controlled by git. Put your credentials in the file and
save it locally in your project.

Getting Started
-----------

To get started, clone this repo, and run `npm install` in the root directory.

```sh
git clone https://github.com/Eleein/gist_gitHub
cd gist_assignment
npm install
```
Then, you should run `Cypress` to make sure the tests are running.

Description
-----------
These tests are representative user interactions with the Gist UI application and API. They are scoped to
common user's workflows that bring value to the business. 

There are two test suites **gist** and **gist api**. 

**gist** suite tests the UI for three happy paths that are common user workflows:
1. Creating a gist by typing in the editor.
2. Creating a gist by drag and drop.
3. Listing your gists

**gist api** suite tests the api for:

1. Listing gist for an anonymous user.
2. Listing gist for an authenticated user.
3. Creating gist via POST request

___

This project was created with 💚 by Dania Duany.



