'use strict';

import {expect} from 'chai';
import SysadminThreeController from './sysadmin-three-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new SysadminThreeController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
