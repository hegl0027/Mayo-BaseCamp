'use strict';

import { expect } from 'chai';
import HomeFiveController from './home-five-controller';

let ctrl;

describe('home five controller', () => {

    beforeEach(() => {
        ctrl = new HomeFiveController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
