'use strict';

import {expect} from 'chai';
import SysadminTwoController from './sysadmin-two-controller';

let ctrl;

describe('sys admin two controller', () => {

    beforeEach(() => {
        ctrl = new SysadminTwoController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
