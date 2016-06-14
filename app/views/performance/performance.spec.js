'use strict';

import {expect} from 'chai';
import PerformanceController from './performance-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new PerformanceController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
