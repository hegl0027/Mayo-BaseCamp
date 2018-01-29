# Extending Basecamp with a new Component (and a new View)

|  Step  |  Description  |
| ------ |  -----------  |
| 01 - A new Component | A new Angular Component to place new logic and view |
| 02 - Add Component to the route | Making the component available to the site. |
| 03 - Link to the Component | Reference the component in the side navigation |
| 04 - Add data to display | Add some placeholder data for now
| 05 - Test the component | Test the display and behavior of a component

In this file patient will be used as an example of the steps taken.

## 01 - A new [Angular Component](https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html)

A Component can be generated using the ng generate command:

`ng generate component patient` or `ng g c patient`
This will create a patient-list directory under src/app containing the following files:

|  File  |  Description  |
| ------ |  -----------  |
| 01 - patient.component.html | A default template for the component. |
| 02 - patient.component.ts | A skeleton component. |
| 03 - patient.component.scss | An empty SASS CSS file |
| 04 - patient.component.spec.ts | A skeleton test file verifying the component exists.

In addition it will update app.module.ts to import the new component and include it in the NgModule declarations list.

### app/patient/patient.component.ts

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

By default the component will be set up to use an external templateUrl, alternatively, the HTML template can be supplied _inline_ by using a [_Template literal_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or a normal string.

### app/patient/patient.component.html

```html
<p>
  patient works!
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
{ path: 'patient', component: PatientComponent },
```

__Note:__ At this point, with the server running (ng serve), the component can be viewed in the browser by editing the url to include the component path: <http://localhost:4200/patient> The next step is to provide navigation to the component. If the path had been named patient-detail, the url for viewing the component would be <http://localhost:4200/patient-detail>.

## 03 - Link to the Component _in the side navigation_

It is not convenient to manually enter the URL of the desired page, so a reference to the page will be added in the navigation component.

Add an entry for the new route to the sidebar template.

### app/sidebar/sidebar.component.html

Here we use the same icon from the header as a placeholder for Patient.

```html
    </li>
    <li>
      <a title="Patient" href="#/patient">
        <svg class="icon"><use [attr.xlink:href]="'#'+patientPicture.default.id"></use></svg> Patient
      </a>
    </li>
```
## 04 - Add data

'patient works!' is not very exciting, so create some placeholder data to display in the template instead.
In the component, add a patient:

```js
  patient = {
    name: 'Some Test Patient one',
    mrn: 123,
    birthdate: 'Jan-12-1920',
    age: 98
  };
```

In the template, display the patient information:

```html
<h1>Patient Name: {{ patient.name }}</h1>
<h2>Patient ID: {{ patient.mrn }}</h2>
<h3>Patient Birthdate: {{ patient.birthdate }}</h3>
```

The {{}} will display the information from the component.

## 05 - Test the component 
`patient.component.spec.ts` is the test file.  

All files ending with `*.spec.ts` will be recognized by the test runner, [Karma](https://karma-runner.github.io/2.0/index.html).

### File created by CLI
```js
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponent } from './patient.component';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ PatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
```

### Configuration

Because the test is for an Angular component, and normally the component would be existing within a larger application, it is necessary to provide a module definition/configuration in which to use the component.

Any other components, services, or 'things' the component depends on or uses need to be declared in this configuration.

```js
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      providers: [ ]
    })
```


### Testing

[Jasmine](https://jasmine.github.io/) is the test framework and assertion library we are using, though others are available.

We use `describe()` to group behaviors into separate blocks.

We use `it()` for a specific test within the behavior block.

We use `expect()` to check/validate a value within the test.

The basic example:
```js
  it('should create', () => {
    expect(component).toBeTruthy();
  });

```