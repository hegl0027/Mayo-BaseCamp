import angular from 'angular';
import {expect} from 'chai';

let templates;

describe('Templates service', () => {

  beforeEach(angular.mock.module('app.shared.templates'));

  beforeEach(angular.mock.inject((_templates_) => {
    templates = _templates_;
  }));

  it('should be initialized', () => {
    expect(templates).to.exist;
  });

  it('should throw error if no template is provided', () => {
    expect(templates.get).to.throw(Error);
  });

  it('should throw error if the template does not exist', () => {
    expect(() => {templates.get('notfound.html');})
      .to.throw(ReferenceError, /Unable to find notfound.html in the template cache/);
  });

  it('should store template', () => {
    let myTemplate = '<div></div>';
    templates.put('myTemplate.html', myTemplate);
    expect(templates.get('myTemplate.html')).to.equal(myTemplate);
  });

});