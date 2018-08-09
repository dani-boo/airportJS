'use strict'

describe('Weather', function() {
  var weather;
  
  beforeEach(function() {
    weather = new Weather();
  });

  it('can be stormy at times', function() {
    spyOn(Math,'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy();
  });

  it('can be clear and sunny and amazing', function() {
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy();
  });
});
