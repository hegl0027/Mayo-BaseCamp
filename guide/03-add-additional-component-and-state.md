# Extending Basecamp with a new Component (and a new View)

|  Step  |  Description  |
| ------ |  -----------  |
| 01 - A new Component | A new Angular Component to place new logic and view |
| 02 - Add Component to the route | Making the component available to the site. |
| 03 - Link to the Component | Reference the component in the side navigation |

In this file patient-list will be used as an example of the steps taken.

## 01 - A new [Angular Component](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)

A Component can be generated using the ng generate command:

`ng generate component PatientList` or `ng g c patient-list`
This will create a patient-list directory under src/app containing the following files:

|  File  |  Description  |
| ------ |  -----------  |
| 01 - patient-list.component.html | A default template for the component. |
| 02 - patient-list.component.ts | A skeleton component. |
| 03 - patient-list.component.scss | An empty SASS CSS file |
| 04 - patient-list.component.spec.ts | A skeleton test file verifying the component exists.

In addition it will update app.module.ts to import the new component and include it in the NgModule declarations list.

### app/patient-list/patient-list.component.ts

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

By default the component will be set up to use an external templateUrl, alternatively, the HTML template can be supplied _inline_ by using a [_Template literal_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or a normal string.

### app/patient-list/patient-list.component.html

```html
<p>
  copmonent-name works!
</p>
```

At this point, the Component is available and ready to use, __HOWEVER__ since basecamp is setup to use routes, the new component needs to be configured for routing.

## 02 - Add the new Component to the routing

The new Component exists, but to be available for navigation, it must be included in the Routes.

1. __app-routing.module.ts__ Add the imported Component to the "Routes" array with a specified path:

As an example, add the path as an additional child of the 'app' path:

```js
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'patient', component: PatientComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];
```

__Note__ the additional path added is:

```js
{ path: 'patient-list', component: PatientListComponent },
```

__Note:__ At this point, the component can be viewed in the browser by editing the url to include the component path: <http://localhost:4200/patient-list> The next step is to provide navigation to the component. If the path had been named patientList, the url for viewing the component would be <http://localhost:4200/patientList>.

## 03 - Link to the Component _in the side navigation_

It is not convenient to manually enter the URL of the desired page, so a reference to the page will be added in the navigation component.

Add an entry for the new route to the sidebar template.

### app/components/nav/nav.component.ts

```json
{
  iconSrc: supportIcon,
  route: '/app/sample/',
  label: 'Sample'
}
```

--------

## Extending with a new `@NgModule`. [link]

By creating a module, components can be placed within other components.  The module creation allows for injection of Components.
