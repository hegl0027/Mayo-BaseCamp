'use strict';

import {expect} from 'chai';
import SysadminOneController from './sysadmin-one-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new SysadminOneController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
