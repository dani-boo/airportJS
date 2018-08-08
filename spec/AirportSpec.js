'use strict'

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  
  it('has zero planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can allow planes to land', function() {
    // land spy plane at airport
    airport.clearForLanding(plane);
    // set expectation
    expect(airport.planes()).toEqual([plane]);
  });

  it('knows when weather is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('when it\'s stormy', function() {
    
    it('denies takeoff', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('cannot take off during storm');
    });

    it('denies landing', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });
});
