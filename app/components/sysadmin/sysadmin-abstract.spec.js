'use strict';

import {expect} from 'chai';
import SysadminAbstractController from './sysadmin-abstract-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new SysadminAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
