## Installation

```bash
$ npm install

```

## Running the app

```bash

$ npm run db:dev:up #to create the db container and run it in background

$ npm run db:dev:rm #to remove the db container

$ npm run prisma:dev:deploy # to run the migrations over the db

$ npm run db:dev:restart #to restart the db(remove db container, create a new one and run the migrations over it)

$ npx prisma db seed # do this after the db is up and the migrations are made to seed the db with a user (email: admin@gmail.com, password: admin) and 3 invoices

$ npm run start # to run the app
```

## How to use the app

The app is using JWT and requires Bearer + token recieved when logged in for authorization
