'use strict';

import {expect} from 'chai';
import VoiceAndToneController from './voiceandtone-controller';

let ctrl;

describe('app module', () => {

    beforeEach(() => {
        ctrl = new VoiceAndToneController();
    });

    it('should be initialized', () => {
        expect(ctrl).to.exist;
    });
});
