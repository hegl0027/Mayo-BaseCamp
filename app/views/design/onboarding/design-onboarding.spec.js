'use strict';

import {expect} from 'chai';
import DesignOnboardingController from './design-onboarding-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignOnboardingController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
