# ToyboxWebNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy API client for local development

1. Run commands:

    ```bash
      # Review configuration files:
        1. toybox-api.json
        2. openapi-config.json
        3. package.json/scripts/gen-backend

      # Generate client by running:
      > npm run gen-backend

      # Follow generated README.md file for instructions on how to build, install, and implement:
      > toybox-backend/README.md, or:
         1. cd ../toybox-backend-ts-ng
         2. npm install
         3. ./node_modules/bin/tsc
         4. copy dist ../toybox-web-ng/node-modules/toybox-ts-ng

    ```

2. Review package.json for client reference

    ```bash

      "toybox-backend": "file:../toybox-backend-ts-ng"

    ```