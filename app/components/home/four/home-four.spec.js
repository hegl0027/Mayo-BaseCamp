'use strict';

import { expect } from 'chai';
import HomeFourController from './home-four-controller';

let ctrl;

describe('home four controller', () => {

    beforeEach(() => {
        ctrl = new HomeFourController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
