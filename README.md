# EliqWlaAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

API Specification:
- api url =>  https://www.thecocktaildb.com/api.php
- Filter => https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
- Get by Id => https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={The id of drink}

## Development server
| Function                   | Description     |
| :------------------------- | :---------------------------------------------------------- |
| `ng serve`        | Navigate to `http://localhost:4200/` | 
| `ng generate component component-name`        | Code scaffolding | 
| `ng build`| Build | 
| `ng test` | Running unit tests | 
| `ng e2e`  | Running end-to-end tests |


## Develop this project in WLA (White-Label App) approach
It's just a simple example
json
In this project for branding, it is used three config files json namely: 
- general.config.json => for changing general layout in app e.g. navbar layout, apptitle, logo
- product-list.config.json =>  for changing layout and styles of Product list page
- product-detail.config.json => for ordering any compenents or elements and changing layout of Product details page

## How to use this branding files
- Defined the requirements in json files in brading folder
- For calling them in an appropritae pattern of calling path utilizing paths property in tsconfig.ts
- Utilized resolveJsonModule for reading json files
- Implemented InjectionToken to use the config in entire project as an independency .
    - Developed general.config, product-list.config, product.detail.config
    - For using them, you shoud invoke and inject them through provider and inject, thus they are implemented in app.config, app.routes based on the needs
    - Moreover, Used them in components (e.g. navbar, product-list, product-details, product-vard) and services (for example: productservice) with inject DI
    - Ulitimatly, used them in template with @if and @for (for more information read the product.details.template file that displays the relevant components based on ordering in json file)

