'use strict';

import {expect} from 'chai';
import DesignComponentsController from './design-components-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignComponentsController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
