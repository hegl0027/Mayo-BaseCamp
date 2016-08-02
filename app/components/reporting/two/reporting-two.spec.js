'use strict';

import {expect} from 'chai';
import ReportingTwoController from './reporting-two-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new ReportingTwoController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
