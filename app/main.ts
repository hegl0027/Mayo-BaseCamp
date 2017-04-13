import 'core-js';
import 'zone.js';
import 'reflect-metadata';

import AppModule from './app.module';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
