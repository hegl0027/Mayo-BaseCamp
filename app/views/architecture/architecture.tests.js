'use strict';

import { assert } from 'chai';
import ArchCtrl from './architecture.controller';

let archCtrl;

describe('app.architecture module', function () {

    beforeEach(function () {
        archCtrl = new ArchCtrl();
    });

    it('should be initialized', function () {
        console.log(archCtrl);
        assert.equal(archCtrl.name, 'Architecture Controller');
    });
});
