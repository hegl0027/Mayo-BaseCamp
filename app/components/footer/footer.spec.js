import {expect} from 'chai';
import FooterController from './footer-controller';

let ctrl;

describe('footer controller', () => {

    beforeEach(() => {
        ctrl = new FooterController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
