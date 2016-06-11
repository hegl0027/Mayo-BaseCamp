'use strict';

import { expect } from 'chai';
import HomeOneController from './home-one-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new HomeOneController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
