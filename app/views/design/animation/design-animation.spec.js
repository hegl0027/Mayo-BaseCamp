'use strict';

import {expect} from 'chai';
import DesignAnimationController from './design-animation-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignAnimationController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
