# Mattermost UI Library

React and react-bootstrap based UI library for mattermost plugins

# How to use

## 1. Use the correct node version

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

## 2. Installation

Run the following command to install the library

```sh
$ npm install mattermost-ui-lib
```

> The library has the following peer dependencies
```
"bootstrap": "~5.2.0",
"font-awesome": "~4.7.0",
"react": "~16.13.1",
"react-dom": "~16.10.2",
"typescript": "~3.9.10"
```

## 3. Import the styles from the library

```
@import "mattermost-ui-lib/build/styles/main.scss";
```

## 3. Available Components

~~~
 1. AutoSuggest
 2. Buttons
    1. MenuButtons
 3. Card
    1. BaseCard
    2. Subscription
    3. Card
 4. Checkbox
 5. ConfirmationDialog
 6. ConfirmationPanel
 7. Dropdown
 8. EmptyState
 9. Icons
 10. InputField
 11. Loader
    1. Circular
    2. Linear
    3. Skeleton
 12. Modal
    1. subComponents
       1. ModalBody
       2. ModalFooter
       3. ModalHeader
       4. ModalLoader
       5. ModalSubtitleAndError
     2. CustomModal
 13. Popover
 14. ResultPanel
 15. SvgWrapper
 16. Tabs
 17. ToggleSwitch
 18. Tooltip
~~~

## 4. Importing the components
~~~
import {ModalSubtitleAndError, ModalFooter, AutoSuggest} from 'mattermost-ui-lib';
import {SkeletonLoader, EditIcon, DeleteIcon, UnlinkIcon, Modal} from 'mattermost-ui-lib';
~~~

## 4. Folder Structure

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── mattermost.png
│   └── robots.txt
├── src
│   ├── components
│   │   └── *
│   ├── styles
│   │   ├── abstract
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base
│   │   │   └── _utils.scss
│   │   ├── components
│   │   │   └──*
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
└── tsconfig.json
```

---

Made with &#9829; by [Brightscout](https://www.brightscout.com)
