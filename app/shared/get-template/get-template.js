/**
 * Wrapper for $templateCache service get(..)
 *
 * @param {Object} $templateCache - Angular service
 * @param {Object} $log - Angular service
 * @return {{get: (function(*=))}} - Object literal with get function that wraps $templateCache.get(..)
 * @constructor
 */
export default function GetTemplate($templateCache, $log) {
  return {

    /**
     * Throw hard error if the template doesn't exist in the $templateCache
     *
     * @param {String} templateCachePath - template cache key used in app/components/templates.js
     * @return {*} - html of the template
     */
    get: (templateCachePath) => {
      let template = $templateCache.get(templateCachePath);
      if (!template) {
        $log.error("Unable to find " + templateCachePath + " in the template cache.");
      }
      return template;
    }
  };
}