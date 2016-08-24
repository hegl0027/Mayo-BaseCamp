import angular from 'angular';
import {expect} from 'chai';

let templateCache;

describe('Template cache service', () => {

  beforeEach(angular.mock.module('templateCache'));

  beforeEach(angular.mock.inject((_templateCache_) => {
    templateCache = _templateCache_;
  }));

  it('should be initialized', () => {
    expect(templateCache).to.exist;
  });

  it('should throw error if no template is provided', () => {
    expect(templateCache.get)
      .to.throw(Error, /templateCachePath must be a string/);
  });

  it('should throw error template provided is not a string', () => {
    expect(() => {templateCache.get(1);})
      .to.throw(Error, /templateCachePath must be a string/);
  });

  it('should throw error if the template does not exist', () => {
    expect(() => {templateCache.get('notfound.html');})
      .to.throw(Error, /Unable to find html template: notfound.html/);
  });

  it('should store template', () => {
    let myTemplate = '<div></div>';
    templateCache.put('myTemplate.html', myTemplate);
    expect(templateCache.get('myTemplate.html')).to.equal(myTemplate);
  });

});