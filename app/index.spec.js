'use strict';

import angular from 'angular';
import {expect} from 'chai';
import IndexController from './index-controller';
import app from './app';

let ctrl;

describe('index module', () => {

    beforeEach(angular.mock.module(app.name));

    beforeEach(angular.mock.inject(($interval, $state, $log, apiService) => {
        ctrl = new IndexController($interval, $state, $log, apiService);
    }));

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
