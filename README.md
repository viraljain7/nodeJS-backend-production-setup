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

  > ```js
  >  mkdir config constant controller model router service types util middleware
  > ```

- And run below command in root directory

  > ```js
  >  mkdir ngnix script logs public test docker
  > ```
  >
  > ```js
  > touch ngnix/.gitkeep script/.gitkeep logs/.gitignore test/.gitkeep public/.gitkeep docker/.gitkeep
  > ```

- Folder Structure Sholud be look like this

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

- package.json sholud be look like

  > ```js
  >  "main": "src/server.ts",
  >  "scripts": {
  >    "dist": "npx tsc",
  >    "dev": "nodemon src/server.ts",
  >    "start": "node dist/server.ts",
  >    "prepare": "husky"
  >  },
  > ```

- Add File in `root` directory and named as `ecosystem.config.js`, `tsconfig.json` then paste below code

  > ```js
  > // tsconfig.json
  > {
  >  "compilerOptions": {
  >    "target": "es2016",
  >    "module": "commonjs",
  >    "rootDir": "./src",
  >    "outDir": "./dist",
  >    "removeComments": true ,
  >    "esModuleInterop": true,
  >    "forceConsistentCasingInFileNames": true,
  >    "strict": true,
  >    "noImplicitAny": true,
  >    "strictNullChecks": true,
  >    "strictFunctionTypes": true,
  >    "strictPropertyInitialization": true,
  >    "alwaysStrict": true,
  >    "noUnusedLocals": true,
  >    "noUnusedParameters": true,
  >    "noImplicitReturns": true,
  >    "skipLibCheck": true
  >  }
  > }
  > ```

7. Commit Lint Setup

   > ```js
   > npm install --save-dev @commitlint/config-conventional @commitlint/cli
   > ```
   >
   > Add File in `.husky` directory and named as `commit-msg` then paste below code

   > ```js
   > npx --no-install commitlint --edit "$1"
   > ```
   >
   > Add File in `root` folder and named as `commitlint.config.js` then paste below code

   > ```js
   > module.exports = {
   >   extends: ["@commitlint/cli", "@commitlint/config-conventional"],
   >   rules: {
   >     "type-enum": [
   >       2,
   >       "always",
   >       [
   >         "feat",
   >         "fix",
   >         "docs",
   >         "style",
   >         "refactor",
   >         "perf",
   >         "test",
   >         "build",
   >         "ci",
   >         "chore",
   >         "revert",
   >       ],
   >     ],
   >     "subject-case": [2, "always", "sentence-case"],
   >   },
   > };
   > ```
