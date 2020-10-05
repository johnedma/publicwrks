# Solo React Redux Project - PublicWRKS

## Getting started

1. Clone this repository
2. Install dependencies ( `npm install` in root and /client)
3. Create a **.env** file based on the example with proper settings for your development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges

5. Run

   * `npm run db:create`
   * `npm run db:migrate`
   * `npm run db:seed:all`
   * `npm start`
   * reference root package.json if scripts don't run properly

# Features

## User Stories

* As a user I want to be able to show my appreciation for art and/or display my one unique tastes while supporting a charitable cause/social good.
* As a user I would like to customize the product I am purchasing.
* As a user I would like to purchse available art pieces across multiple print mediums.
* As a user I would like a secure checkout experiecnce with a trusted/recognizable name.

## Features MVP

* Admin log-in with dashboard for orders and CRUD functionality for products
* Add to cart and checkout functionality (secure checkout via 3rd party api)
* Search/filter proucts
* Color editor on product pages

## Stretch Goal

* Marketplace functionality.
