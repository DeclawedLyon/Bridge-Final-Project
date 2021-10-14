# Bridge

## About

Bridge is a shipping logistics utility application. It helps businesses or people with intensive shipping requirements keep all of their information in one place. This makes supply chain management easier and more manageable for the user.

## Pictures

!["Bridge-Dashboard](https://github.com/DeclawedLyon/Bridge-Final-Project/blob/master/docs/bridge-dashboard.png?raw=true)
![Bridge-Add-A-Package](https://github.com/DeclawedLyon/Bridge-Final-Project/blob/master/docs/bridge-add-a-package.png?raw=true)
![Bridge-Mobile](https://github.com/DeclawedLyon/Bridge-Final-Project/blob/master/docs/bridge-mobile.png?raw=true)

## Using Bridge

First, fork this repository so you get your own copy. Once you have done that, you can clone your new repo to your machine, and get started.

Bridge requires **TWO** terminals.

Confirm that you have postgres on your machine.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default).

Then run `rails s -b 0.0.0.0` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to `.env`. Then run `npm start` and go to `localhost:3001` in your browser.
