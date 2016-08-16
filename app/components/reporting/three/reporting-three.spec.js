import {expect} from 'chai';
import ReportingThreeController from './reporting-three.controller';

let ctrl;

describe('reporting three controller', () => {

    beforeEach(() => {
        ctrl = new ReportingThreeController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
