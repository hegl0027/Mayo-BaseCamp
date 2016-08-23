import angular from 'angular';
import {expect} from 'chai';
import navSelected from './nav-select.config';

let scope, element;

describe('nav-select directive ', () => {

  beforeEach(angular.mock.module(navSelected.name));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    let dom = "<ul><li class='selected' nav-select></li><li nav-select></li></ul>";

    scope = $rootScope.$new();
    element = $compile(dom)(scope);
    scope.$digest();
  }));

  it('should remove sibling selected class on click', () => {
    let $li = element.find('li');
    expect($li).to.have.lengthOf(2);
    expect($li.eq(0).hasClass('selected')).to.be.true;

    $li.eq(1).triggerHandler('click');
    expect(element.find('li').eq(0).hasClass('selected')).to.be.false;
    expect($li.eq(1).hasClass('selected')).to.be.true;
  });

});