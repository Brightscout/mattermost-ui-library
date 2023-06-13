# Mattermost-UI-Library
The Mattermost UI Library is a collection of React components based on the [Compass design system](https://zeroheight.com/29be2c109/p/4429ac-components).
The intention behind this UI library is to create a unified look and feel across the Mattermost's plugins.

Click [here]( https://6351138fe1271125e36406fb-vpprpcpesw.chromatic.com/) to view the Storybook of Mattermost-UI-Library.

## 1. Clone it to your local machine

You need to clone (download) it to local machine using

```sh
$ git clone git@github.com:Brightscout/mattermost-ui-library.git
```

> This makes a local copy of the repository in your machine. Now cd into the directory using the following command...

```sh
$ cd mattermost-ui-library
```

## 2. Use the correct node version

Once you've moved into the folder where you've cloned the repo, run the following command to check the node version (you need to [install nvm](https://github.com/nvm-sh/nvm/tree/v0.39.1#installing-and-updating) before proceeding further)

```sh
$ nvm which
```

> If you see the output something like `N/A: version "v14.18.1" is not yet installed` then run the following command

```sh
$ nvm install v14.18.1
```

Now run the following command to start using the above node version

```sh
$ nvm use
```

## 3. Install the dependencies

Run the following command to install the dependencies

```sh
$ npm install
```

The following are the available scripts:

## 4. Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run chromatic`

Deploys the storybook to chromatic

- Login to `chromatic` with your GitHub account.
- Then create a `new project` and sync it with the github repository.
- Choose github repo under collaborators and select the repository.
- Copy the unique `project-token` that was generated for the project.

  https://user-images.githubusercontent.com/102018792/201682370-c327d535-3c53-4767-a4c2-590dd74f475f.mp4

- Create `.npmrc` file and add `projectToken=$project_token`

## 5. Local Development

- To use package locally add `"@brightscout/mattermost-ui-library": "link:<library_folder_address>"` to your project dependencies. E.g.: `"@brightscout/mattermost-ui-library": "file:../../mm-ui-library",`

- The build fails due to multiple copies of react in the application, one in the main app and the another in the UI library. To resolve this issue using symbolic link, follow the following steps:

  - Link react using the link command from the package manager. E.g:

  ```
  cd ./node_modules/react
  yarn link react
  cd ../../
  ```

  - In the toolkit to use the copy of react from the main app, execute the following command:

  ```
  yarn link react
  yarn run build
  ```

- The toolkit should be up and running in your main app.

## 6. Folder Structure

```
.
├── .storybook
│   ├── main.js
│   └── preview.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── mattermost.png
│   └── robots.txt
├── src
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.component.tsx
│   │   │   ├── Button.d.ts
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.styles.ts
│   │   │   └──  index.ts
│   │   │
│   │   └──  *
│   ├── styles
│   │   ├── abstract
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── colorsForJs.module.scss
│   │   └── main.scss
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .browserslistrc
├── .editorconfig
├── .eslintignore
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

---

## 7. Publish as the NPM package
You can follow the below steps:
- Upgrade the `version` in the [package.json](package.json) file.
- Run command `npm login` on the CLI inside the root folder of this project and login using your NPM credentials.
  ![image](https://github.com/Brightscout/mm-ui-library/assets/72438220/ae655d14-b9d5-49ff-955f-2ac69cd7751d)

- Run command `npm publish` to create a new build and publish it.

**Note:** To publish as the NPM package make sure you are a part of [Brightscout](https://www.npmjs.com/org/brightscout) organization on the [NPM](https://www.npmjs.com).

Made with &#9829; by [Brightscout](https://www.brightscout.com)
