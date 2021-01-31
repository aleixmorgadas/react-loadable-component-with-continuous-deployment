# react-loadable-component-with-continuous-deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/4218a232-cacc-464b-a79d-f87bd7dc92a6/deploy-status)](https://app.netlify.com/sites/react-loader-component-continuous-deployment/deploys)

React @loadable/component with Continuous Deployment

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

[spa]: https://en.wikipedia.org/wiki/Single-page_application
[lc]: https://github.com/gregberge/loadable-components#readme