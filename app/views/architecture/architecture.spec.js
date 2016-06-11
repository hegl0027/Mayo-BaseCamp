'use strict';

import { assert } from 'chai';
import ArchCtrl from './architecture-controller';

let archCtrl;

describe('app.architecture module', () => {

    beforeEach(() => {
        archCtrl = new ArchCtrl();
    });

    it('should be initialized', () => {
        assert.equal(archCtrl.name, 'Architecture Controller', 'The property name should be "Architecture Controller"');
    });
});
