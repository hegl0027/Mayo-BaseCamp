'use strict';

import {expect} from 'chai';
import SysadminAbstractController from './sysadmin-abstract-controller';

let ctrl;

describe('sys admin abstract controller', () => {

    beforeEach(() => {
        ctrl = new SysadminAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
