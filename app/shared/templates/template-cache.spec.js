import angular from 'angular';
import {expect} from 'chai';

let templates;

describe('Templates service', () => {

  beforeEach(angular.mock.module('template-cache'));

  beforeEach(angular.mock.inject((_templateCache_) => {
    templates = _templateCache_;
  }));

  it('should be initialized', () => {
    expect(templates).to.exist;
  });

  it('should throw error if no template is provided', () => {
    expect(templates.get)
      .to.throw(Error, /templateCachePath must be a string/);
  });

  it('should throw error template provided is not a string', () => {
    expect(() => {templates.get(1);})
      .to.throw(Error, /templateCachePath must be a string/);
  });

  it('should throw error if the template does not exist', () => {
    expect(() => {templates.get('notfound.html');})
      .to.throw(Error, /Unable to find notfound.html in the template cache/);
  });

  it('should store template', () => {
    let myTemplate = '<div></div>';
    templates.put('myTemplate.html', myTemplate);
    expect(templates.get('myTemplate.html')).to.equal(myTemplate);
  });

});