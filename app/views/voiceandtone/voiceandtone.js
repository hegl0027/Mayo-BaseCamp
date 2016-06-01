'use strict';

import angular from 'angular';

function VoiceAndToneController() {

}

var voiceAndToneStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.voiceandtone', {
            url: '/voiceandtone',
            controller: VoiceAndToneController,
            controllerAs: 'voiceAndTone',
            data: {
                title: 'Voice and Tone',
                hasSecondaryNav: false
            },
            templateProvider: function ($templateCache) {
                return $templateCache.get('voiceandtone/voiceandtone.html');
            }
        });
};

export default angular.module('app.voiceandtone', [])
    .config(voiceAndToneStateConfig);
