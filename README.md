

# APICallUsingAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0-beta.11.

## Dependencies

This project was made in angular-7, so it needs Typescript version greater then 3.4.0,
Node version greater then 8, and angular cli  latest version.

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

## How to start

1) Download the application 
2) npm install
3) npm start or ng serve -o
4) Navigate to `http://localhost:4200/` in the browser
5) Refresh the browser if API doesnt respond.

## Folders  and Files Generated by me

*services
    |-- cars-api.service.ts (contains the code for calling the API made it generic)

*Model
    |-- car.ts (Model class for storing the cars data )
	
*Pipes
    |-- OderByPipe.ts (Class for sorting the cars data )

*app
    |--display-cars.component.ts (For using the data consumed by cars-api.service.ts)
    
    |--display-cars.component.html (For displaying the car details )
	

All the services and components are declared in the root module(app.module.ts).



