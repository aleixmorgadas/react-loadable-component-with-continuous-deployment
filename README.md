# react-loadable-component-with-continuous-deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/4218a232-cacc-464b-a79d-f87bd7dc92a6/deploy-status)](https://app.netlify.com/sites/react-loader-component-continuous-deployment/deploys)

React @loadable/component with Continuous Deployment.

See the explanation post for more info at https://dev.to/aleixmorgadas/react-loadable-component-with-continuous-deployment-5ep3

[![dev.to](https://media-exp1.licdn.com/dms/image/sync/C4D27AQEwD6Ww8_WIkg/articleshare-shrink_800/0/1612128674739?e=1612220400&v=beta&t=wZ1k9XusxXlKkuo25eAspLO9DzF-peNhpofxKj-kckI)](https://dev.to/aleixmorgadas/react-loadable-component-with-continuous-deployment-5ep3)

## Project Docs

- [React Instructions](./doc/react-instructions.md)

## Decisions

- It's a [Single-Page Application][spa]
- We need [@loadable/component][lc] library to reduce the application first loading size
- We  don't want to store the previous artifacts (js & css) between deployments to keep old versions working
- We want Continuous Deployment

## Problem

Let's try do build the project twice changing a little a file:

__Build 1__

![build01](./doc/assets/build01.png)

__Build 2__

![build02](./doc/assets/build02.png)

As you see, some file names changed as they contain the checksum in the name to verify that the content has changed.

__See example video of the behavior__

[![Video with error](./doc/assets/thumbnail-without-error.png)](https://raw.githubusercontent.com/aleixmorgadas/react-loadable-component-with-continuous-deployment/main/doc/assets/loadable-component-without-error-handling.webm)

## Solution

Wrap the Router file with a `ErrorBoundary` component that caches the `'ChunkLoadError'` thrown by `@loadable/component` and asks the user to reload the page.

You add this [ErrorBoundary](./src/ErrorBoundary.jsx) file to your project, and then you wrap the `<Router>...</Router>` Component with it. [See example here](https://github.com/aleixmorgadas/react-loadable-component-with-continuous-deployment/blob/main/src/App.js#L18-L19)

__See example of the correct behavior__

[![Video without error](./doc/assets/thumbnail-with-errorhandling.png)](https://raw.githubusercontent.com/aleixmorgadas/react-loadable-component-with-continuous-deployment/main/doc/assets/loadable-component-with-error-handling.webm)

# License

Copyright (c) 2021 Aleix Morgadas Licensed under the [MIT License](./LICENSE)


[spa]: https://en.wikipedia.org/wiki/Single-page_application
[lc]: https://github.com/gregberge/loadable-components#readme