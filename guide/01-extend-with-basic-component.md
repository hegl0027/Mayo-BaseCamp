#Extending Basecamp with a new Component (and a new View)

|  Step  |  Description  |
| ------ |  -----------  |
| 01 - A new Component | A new Angular Component to place new logic and view |
| 02 - Add Component to a Module | Making the component available within a Module, and the app |
| 03 - Link to the Component | Reference the component in the side navigation |

## 01 - A new [Angular Component](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)

__app/sample/sample.component.ts__

```js
import { Component } from '@angular/core';

import template from './sample.tmpl.html';

@Component({
  template
})

export class SampleComponent {};
```
A Component must always have a template.  In the example above, the HTML template is imported (the html file below) and will be the 'view' of the Component. This can contain bindings from the component, other sub-components, or HTML elements.

Alternatively, the HTML template can be supplied _inline_ by using a [_Template literal_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or a normal string.

__app/sample/sample.tmpl.html__
```
<h2>Sample</h2>
Sample text for a sample HTML template 
```

At this point, the Component is available but not yet used in the application.

## 02 - Add the new Component to a [NgModule](https://angular.io/docs/ts/latest/api/core/index/NgModule-interface.html) (_i.e. make it available in the application_)
The new Component exists, but to be available in the application, it must belong to an NgModule. It could be imported and declared in any module, but as an example, it will be placed in the main application `app.ts` NgModule, as a child of the 'app' path.

1. __app.ts__ Import the component
```js
import { SampleComponent } from './components/sample/sample.component';
```

2. __app.ts__ Add the imported Component to the "Routes" array with a specified path: 
As an example, add the path as an additional child of the 'app' path:
```js
const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent,
    children: [
      {path: 'home', loadChildren: () => HomeModule},
      {path: 'reporting', loadChildren: () => ReportingModule},
      {path: 'admin', loadChildren: () => AdminModule},
      {path: 'support', loadChildren: () => SupportModule},
      {path: 'patterns', loadChildren: () => PatternsModule},
      {path: 'sample', component: SampleComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }, {
    path: '', redirectTo: 'app', pathMatch: 'full'
  }
];
```
__Note__ the additional path added is:
```js
{path: 'sample', component: SampleComponent},
```

3. __app.ts__ Include the Component with the other Components in the "declarations" of __@NgModule__ so that it is available for use.
```js
declarations: [
  ...
  SampleComponent,
  ...
]
```

__Note:__ at this point, The componet can be navigated to: `npm start` and navigate to `/app/sample`

The existing tabs of Basecamp (Home, Reporting, System Administration, Support, and Style) are Angular Modules that contain Angular Components.  The new component could be placed inside those NgModules, but would only be available within them.

## 03 - Link to the Component _in the side navigation_
It is not convenient to manually enter the URL of the desired page, so a reference to the page will be added in the navigation component.

Add a new object to the links array of the nav Component (for simplicity, using an icon that is already in use):

__app/components/nav/nav.component.ts__
```
{
  iconSrc: supportIcon,
  route: '/app/sample/',
  label: 'Sample'
}
```

--------

## Extending with a new `@NgModule`. [link]
By creating a module, components can be placed within other components.  The module creation allows for injection of Components.
