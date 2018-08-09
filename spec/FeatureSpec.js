'use strict';

describe('Feature Test: ', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe('when weather is awesome',function() {
    beforeEach(function() {
      spyOn(Math,'random').and.returnValue(0);
    });
 
    // USER STORY 1
    // As an air traffic controller
    // To get passengers to a destination
    // I want to instruct a plane to land at
    // an airport and confirm that it has landed
    it('planes can be instructed to land at an airport', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
    // USER STORY 2
    // As an air traffic controller  
    // So I can get passengers on the way to their destination  
    // I want to instruct a plane to take off from an airport   
    // and confirm that it is no longer in the airport  
    it('planes can be instructed to take off', function() {
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.planes()).not.toContain(plane);
    });
    // USER STORY 5
    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when the airport is full
    it('denies landing when hangar is full', function() {

    });

    // USER STORY 6
    // As the system designer
    // So that the software can be used for many different airports
    // I would like a default airport capacity that can be overridden as appropriate

  });

  describe('when stormy', function() {
    // USER STORY 3
    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it('denies takeoff when weather is bad', function() {
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function() { plane.takeoff(); }).toThrowError('cannot take off during storm');
      expect(airport.planes()).toContain(plane);
    });
    // USER STORY 4
    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it('denies landing when weather is bad', function() {
      spyOn(Math,'random').and.returnValue(1);
      expect(function() { plane.land(airport); }).toThrowError('cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});
