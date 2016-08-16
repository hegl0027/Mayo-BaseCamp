import {expect} from 'chai';
import HeaderController from './header.controller';

let ctrl;

describe('header controller', () => {

    beforeEach(() => {
        ctrl = new HeaderController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
