'use strict';

import {expect} from 'chai';
import ReportingAbstractController from './reporting-abstract-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new ReportingAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
