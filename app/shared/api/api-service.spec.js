'use strict';

import angular from 'angular';
import {expect} from 'chai';

let apiService;

describe('api service', () => {

    beforeEach(angular.mock.module('app.shared.api'));

    beforeEach(angular.mock.inject((_apiService_) => {
        apiService = _apiService_;
    }));

    it('should be initialized', () => {
        expect(apiService).to.exist;
    });

});

