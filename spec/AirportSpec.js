'use strict'

describe('Airport', function() {
  var airport;
  var plane;
  var weather;
  
  beforeEach(function() {
    plane = jasmine.createSpy('plane',['land']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
  });
  
  it('has zero planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('can allow planes to land', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can allow planes to take off', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    })
  });

  describe('when it\'s stormy', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });
    
    it('denies landing', function() {
      expect(function() { airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });

    it('denies takeoff', function() {
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('cannot take off during storm');
    });
  });
});
