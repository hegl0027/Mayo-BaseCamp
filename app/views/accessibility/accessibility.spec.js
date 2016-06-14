'use strict';

import {expect} from 'chai';
import AccessibilityController from './accessibility-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new AccessibilityController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
