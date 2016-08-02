'use strict';

import {expect} from 'chai';
import SysadminThreeController from './sysadmin-three-controller';

let ctrl;

describe('sys admin three controller', () => {

    beforeEach(() => {
        ctrl = new SysadminThreeController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
