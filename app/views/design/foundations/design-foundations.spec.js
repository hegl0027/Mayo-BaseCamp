'use strict';

import {expect} from 'chai';
import DesignFoundationsController from './design-foundations-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignFoundationsController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
