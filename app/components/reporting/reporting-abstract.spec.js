'use strict';

import {expect} from 'chai';
import ReportingAbstractController from './reporting-abstract-controller';

let ctrl;

describe('reporting abstract controller', () => {

    beforeEach(() => {
        ctrl = new ReportingAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
