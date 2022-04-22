# GoalsList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0-rc.0.

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

Para actualiar Cli
ng version
https://update.angular.io/


npx @angular/cli@11 update @angular/core@11 @angular/cli@11
npx @angular/cli@12 update @angular/core@12 @angular/cli@12 --allow-dirty --force
npx @angular/cli@13 update @angular/core@13 @angular/cli@13 --allow-dirty --force

ng new GoalsList --style=scss --routing

ng generate component home
ng g c about

Animación

npm install @angular/animations@latest --save


Generar servicio
ng generate service data

ng build

ng build --configuration production

Para que funcione correctamente en el servidor

ng build --prod --base-href="https://ryac.com/goalslis/"

Para publicarlo en github
npm i -g angular-cli-ghpages

Instalar si es necesario
https://git-scm.com/downloads

git init
git add .
git status
git commit -m "Se agrega proyecto"
git remote add origin https://github.com/mrayas/GoalsList.git
git push https://whatever:<token>@github.com/mrayas/GoalsList.git

Deploy

ng build --prod --base-href="https://github.com/mrayas/GoalsList/"
angular-cli-ghpages

