import $ from 'jquery';

/**
 * Directive for managing the '.selected' class on the primary navs.
 *
 * @return {{restrict: string, scope: {}, link: (function(*, *=))}} - directive definition
 */
export default function() {
  return {
    restrict: 'A',
    link: (scope, elem) => {
      elem.on('click', function() {
        $(this).siblings('.selected').removeClass('selected');
        $(this).addClass('selected');
      });
    }
  };
}