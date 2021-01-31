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


[spa]: https://en.wikipedia.org/wiki/Single-page_application
[lc]: https://github.com/gregberge/loadable-components#readme