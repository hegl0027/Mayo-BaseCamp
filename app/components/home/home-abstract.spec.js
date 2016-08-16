import {expect} from 'chai';
import HomeAbstractController from './home-abstract.controller';

let ctrl;

describe('home abstract controller', () => {

    beforeEach(() => {
        ctrl = new HomeAbstractController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
