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

-   Run below command in src directory

    > ```js
    >  mkdir config constant controller model router service types util middleware
    > ```

-   And run below command in root directory

    > ```js
    >  mkdir ngnix script logs public test docker
    > ```
    >
    > ```js
    > touch ngnix/.gitkeep script/.gitkeep logs/.gitignore test/.gitkeep public/.gitkeep docker/.gitkeep
    > ```

-   Folder Structure Should be look like this

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

-   package.json should be look like

    > ```js
    >  "main": "src/server.ts",
    >  "scripts": {
    >    "dist": "npx tsc",
    >    "dev": "nodemon src/server.js",
    >    "start": "node dist/server.js",
    >    "prepare": "husky"
    >  },
    > ```

-   Add File in `root` directory and named as `ecosystem.config.js`, `tsconfig.json` then paste below code

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

6. Commit Lint Setup

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
    >     extends: ['@commitlint/cli', '@commitlint/config-conventional'],
    >     rules: {
    >         'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    >         'subject-case': [2, 'always', 'sentence-case']
    >     }
    > }
    > ```

7. Eslint Setup

    > ```js
    > npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
    > ```

-   create an `eslint.config.mjs` config file in the root of your project, and populate it with the following:

    > ```js
    > // @ts-check
    >
    > import eslint from '@eslint/js'
    > import tseslint from 'typescript-eslint'
    > //import eslintConfigPrettier from 'eslint-config-prettier'
    >
    > export default tseslint.config({
    >     languageOptions: {
    >         parserOptions: {
    >             project: true,
    >             tsconfigRootDir: import.meta.dirname
    >         }
    >     },
    >     files: ['**/*.ts'],
    >     extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    >     rules: {
    >         'no-console': 'error',
    >         // 'no-useless-catch': 0,
    >         quotes: ['error', 'single', { allowTemplateLiterals: true }]
    >     }
    > })
    > ```

-   Add below code in `.husky/pre-commit` file

    > ```js
    > npx lint-staged
    > ```

-   `package.json` code be like

    > ```js
    > {
    > "name": "production-node-setup",
    > "version": "1.0.0",
    >  "main": "src/server.js",
    > "scripts": {
    >   "dist": "npx tsc",
    >   "dev": "nodemon src/server.ts",
    >   "start": "node dist/server.js",
    >   "lint": "eslint .",
    >   "lint:fix": "eslint . --fix",
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

8.  Prettier Setup

    > ```js
    >  npm install --save-dev --save-exact prettier  eslint-config-prettier
    > ```

-   create `.prettierrc` config file in the root of your project and code be like

    > ```js
    > {
    > "trailingComma": "none",
    > "tabWidth": 4,
    > "semi": false,
    > "singleQuote": true,
    > "bracketSameLine": true,
    > "printWidth": 150,
    > "singleAttributePerLine": true,
    > "endOfLine": "crlf"
    > }
    >
    > ```

-   `eslint.config.mjs` config file in the root of your project, and populate it with the following:

    > ```js
    > // @ts-check
    >
    > import eslint from '@eslint/js'
    > import tseslint from 'typescript-eslint'
    > import eslintConfigPrettier from 'eslint-config-prettier'
    >
    > export default tseslint.config({
    >     languageOptions: {
    >         parserOptions: {
    >             project: true,
    >             tsconfigRootDir: import.meta.dirname
    >         }
    >     },
    >     files: ['**/*.ts'],
    >     extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
    >     rules: {
    >         'no-console': 'error',
    >         // 'no-useless-catch': 0,
    >         quotes: ['error', 'single', { allowTemplateLiterals: true }]
    >     }
    > })
    > ```

-   `package.json` code be like

    > ```js
    > {
    > "name": "production-node-setup",
    > "version": "1.0.0",
    >  "main": "src/server.ts",
    > "scripts": {
    >   "dist": "npx tsc",
    >   "dev": "nodemon src/server.ts",
    >   "start": "node dist/server.ts",
    >   "lint": "eslint ",
    >   "lint:fix": "eslint --fix",
    >   "format:check": "prettier . --check",
    >   "format:fix": "prettier . --fix",
    >   "prepare": "husky"
    > },
    > "author": "viraljain",
    > "license": "ISC",
    > "lint-staged": {
    >   "*.ts": [
    >     "npm run lint:fix"
    >     "npm run format:fix"
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

9. Environment Variable Setup
    > ```js
    > npm i  cross-env dotenv-flow
    > ```

-   `package.json` code be like

    > ```js
    > {
    > ...... code
    >   "scripts": {
    >    "dist": "npx tsc",
    >    "dev": "cross-env NODE_ENV=development nodemon src/server.ts",
    >    "start": "cross-env NODE_ENV=production node dist/server.js",
    >    "lint": "eslint ",
    >    "lint:fix": "eslint --fix",
    >    "format:check": "prettier . --check",
    >    "format:fix": "prettier . --fix",
    >    "prepare": "husky"
    >  },
    > ..... code
    > }
    > ```

-   `nodemon.json` code be like

    > ```js
    > {
    > "ext": ".ts",
    > "ignore": ["dist", "node_modules"]
    > }
    > ```

-   `config/config.ts` code be like
    > ```js
    > import dotenvFlow from 'dotenv-flow'
    >
    > dotenvFlow.config()
    >
    > export default {
    >     ENV: process.env.ENV,
    >     PORT: process.env.PORT,
    >     SERVER_URL: process.env.SERVER_URL,
    >     DATABASE_URL: process.env.DATABASE_URL
    > }
    > ```

10. Expressjs Setup

    > ```js
    > bun i express
    > bun i @types/express -D
    > ```

-   `app.ts`

    > ```js
    > import express, { Application } from 'express'
    >
    > const app: Application = express()
    >
    > export default app
    >
    > ```

-   `server.ts`

    > ```js
    > import app from './app'
    > import config from './config/config'
    >
    > const server = app.listen(config.PORT)
    >
    > ;(() => {
    >     try {
    >         // Database connection
    >         console.info(`Application Started`, {
    >             meta: {
    >                 PORT: config.PORT,
    >                 SERVER_URL: config.SERVER_URL
    >             }
    >         })
    >     } catch (err) {
    >         console.error(`Application Started`, { meta: err })
    >
    >         server.close((error) => {
    >             if (error) console.error(`Application Started`, { meta: err })
    >             process.exit(1)
    >         })
    >     }
    > })()
    > ```

-   `types/types.ts`

    > ```js
    > export type THttpResponse = {
    >     success: boolean
    >     statusCode: number
    >     request: {
    >         ip?: string | number
    >         url: string
    >     }
    >     message: string
    >     data: unknown
    > }
    >
    > export type THttpError = {
    >     success: boolean
    >     statusCode: number
    >     request: {
    >         ip?: string | number
    >         url: string
    >     }
    >     message: string
    >     data: unknown
    >     trace?: object | null
    > }
    >
    >
    > ```

-   `router/apiRouter.ts`

    > ```js
    > import { Router } from 'express'
    > import apiController from '../controller/apiController'
    >
    > const router = Router()
    >
    > router.route('/self').get(apiController.self)
    >
    > export default router
    > ```

-   `controller/apiController.ts`

    > ```js
    > export default {
    >     self: (_: Request, res: Response) => {
    >         try {
    >             res.sendStatus(200)
    >         } catch (error) {
    >             res.sendStatus(500)
    >         }
    >     }
    > }
    >
    > ```

-   `util/errorObject.ts`
-   `util/httpError.ts`
-   `util/httpsResponse.ts`
-   `constant/application.ts`
-   `constant/responseMessage.ts`

11. Global Error Handler Setup

-   `middleware/globalErrorHandler.ts`

    > ```js
    > import { NextFunction, Request, Response } from 'express'
    > import { THttpError } from '../types/types'
    >
    > // eslint-disable-next-line @typescript-eslint/no-unused-vars
    > export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    >     res.status(err.statusCode).json(err)
    > }
    > ```

-   `src/app.ts`

12. 404 Handler

-   `src/app.ts`

