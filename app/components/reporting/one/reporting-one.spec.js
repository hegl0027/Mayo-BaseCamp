'use strict';

import {expect} from 'chai';
import ReportingOneController from './reporting-one-controller';

let ctrl;

describe('reporting one controller', () => {

    beforeEach(() => {
        ctrl = new ReportingOneController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
