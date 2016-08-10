'use strict';

import angular from 'angular';
import {expect} from 'chai';
import BaseController from './base-controller';
import app from './app';

let ctrl;

describe('base controller', () => {

    beforeEach(angular.mock.module(app.name));

    beforeEach(angular.mock.inject(($interval, $state, $log, apiService) => {
        ctrl = new BaseController($interval, $state, $log, apiService);
    }));

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
