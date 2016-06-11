'use strict';

import {expect} from 'chai';
import DesignOverviewController from './design-overview-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignOverviewController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
