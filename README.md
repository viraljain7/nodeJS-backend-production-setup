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

   - Add File in `.husky` directory and named as `commit-msg` then paste below code

   > ```js
   > npx --no-install commitlint --edit "$1"
   > ```

   - Add File in `root` folder and named as `commitlint.config.js` then paste below code

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

8. Eslint

   > ```js
   > npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
   > ```

- create an `eslint.config.js` config file in the root of your project, and populate it with the following:

  > ```js
  > // @ts-check
  >
  > import eslint from "@eslint/js";
  > import tseslint from "typescript-eslint";
  > //import eslintConfigPrettier from 'eslint-config-prettier'
  >
  > export default tseslint.config({
  >   languageOptions: {
  >     parserOptions: {
  >       project: true,
  >       tsconfigRootDir: import.meta.dirname,
  >     },
  >   },
  >   files: ["**/*.ts"],
  >   extends: [
  >     eslint.configs.recommended,
  >     ...tseslint.configs.recommendedTypeChecked,
  >   ],
  >   rules: {
  >     "no-console": "error",
  >     // 'no-useless-catch': 0,
  >     quotes: ["error", "single", { allowTemplateLiterals: true }],
  >   },
  > });
  > ```

- Add below code in `.husky/pre-commit` file
  > ```js
  > npx lint-staged
  > ```
- `package.json` code be like
  > ```js
  > {
  > "name": "production-node-setup",
  > "version": "1.0.0",
  > "main": "src/server.ts",
  > "type": "module",
  > "scripts": {
  >   "dist": "npx tsc",
  >   "dev": "nodemon src/server.ts",
  >   "start": "node dist/server.ts",
  >   "lint": "eslint",
  >   "lint:fix": "eslint --fix",
  >   "prepare": "husky"
  > },
  > "author": "viraljain",
  > "license": "ISC",
  > "lint-staged": {
  >   "*.ts": [
  >     "npm run lint:fix"
  >   ]
  > },
  > "description": "",
  > "devDependencies": {
  >   "@commitlint/cli": "^19.4.0",
  >   "@commitlint/config-conventional": "^19.2.2",
  >   "@eslint/js": "^9.9.1",
  >   "@types/eslint__js": "^8.42.3",
  >   "@types/node": "^22.5.0",
  >   "eslint": "^9.9.1",
  >   "husky": "^9.1.5",
  >   "lint-staged": "^15.2.9",
  >   "nodemon": "^3.1.4",
  >   "typescript": "^5.5.4",
  >   "typescript-eslint": "^8.2.0"
  > }
  > }
  > ```
