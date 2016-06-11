'use strict';

import {expect} from 'chai';
import DesignAbstractController from './design-abstract-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new DesignAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
