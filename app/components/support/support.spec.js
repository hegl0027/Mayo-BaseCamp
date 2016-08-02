'use strict';

import {expect} from 'chai';
import SupportController from './support-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new SupportController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
