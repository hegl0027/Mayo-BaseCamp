'use strict';

import { expect } from 'chai';
import HomeFiveController from './home-five-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new HomeFiveController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
