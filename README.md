# Steps for Production Grade Nodejs Backend Setup

1. Node Js initialization

   > ```js
   >   npm init
   > ```

2. Git & Github initialization

   > ```js
   >   git init
   > ```

3. husky initialization

   > ```js
   >   npm i husky lint-staged -D
   > ```

   > ```js
   >   npx husky init
   > ```

4. Typescript and Nodemon Setup

   > ```js
   >  npm i -D typescript nodemon @types/node ts-node
   > ```

   > ```js
   >  npm tsc --init
   > ```

5. Folder Structure

- Run below command in src directory

```js
mkdir config constant controller model router service types util middleware
```

- And run below command in root directory

```js
mkdir ngnix script logs public test docker
```

```js
touch ngnix/.gitkeep script/.gitkeep logs/.gitignore test/.gitkeep public/.gitkeep docker/.gitkeep
```

#### Folder Structure Sholud be look like this

> ```
> ├── docker
> ├── logs
> ├── ngnix
> ├── public
> ├── script
> ├── src
> │ ├── config
> │ ├── constant
> │ ├── controller
> │ ├── middleware
> │ ├── model
> │ ├── router
> │ ├── service
> │ ├── types
> │ ├── util
> │ ├── `app.ts`
> │ └── `server.ts`
> ├── test
> ├── .gitignore
> ├── package.json
> ├── package-lock.json
> ├── README.md
> ├── Topics.md
> └── tsconfig.json
> ```
