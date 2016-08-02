'use strict';

import {expect} from 'chai';
import ReportingThreeController from './reporting-three-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new ReportingThreeController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
