'use strict';

import {expect} from 'chai';
import HomeAbstractController from './home-abstract-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new HomeAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
