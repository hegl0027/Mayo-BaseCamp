'use strict';

import { expect } from 'chai';
import HomeThreeController from './home-three-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new HomeThreeController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
