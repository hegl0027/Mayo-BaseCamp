'use strict';

import {expect} from 'chai';
import DesignPatternsController from './design-patterns-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignPatternsController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
