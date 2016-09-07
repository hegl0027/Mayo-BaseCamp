/**
 * Wrapper for $templateCache service get(..)
 *
 * @param {Object} $templateCache - Angular service
 * @param {Object} $log - Angular service
 * @return {{get: (function(*=))}} - Object literal with get function that wraps $templateCache.get(..)
 * @constructor
 */
export default function TemplateCache($templateCache) {
  return {

    /**
     * Throw hard error if the template doesn't exist in the $templateCache
     *
     * @param {String} templateCachePath - template cache key used in app/components/templates.js
     * @return {*} - html of the template
     */
    get: (templateCachePath) => {
      if (!templateCachePath || typeof templateCachePath !== 'string') {
        throw new Error('templateCachePath must be a string');
      }

      let template = $templateCache.get(templateCachePath);

      if (!template) {
        throw new Error("Unable to find html template: " + templateCachePath);

      }
      return template;
    },

    /**
     * Put function wrapping the $templateCache.put(..) just for completeness
     *
     * @param  {String} templateCachePath - $templateCache key
     * @param {String} content - $templateCache value
     */
    put: (templateCachePath, content) => {
      $templateCache.put(templateCachePath, content);
    }
  };
}
