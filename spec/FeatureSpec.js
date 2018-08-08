'use strict';

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
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
  // To ensure safety
  // I want to prevent takeoff when weather is stormy
  it('denies takeoff when weather is stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function() { plane.takeoff(); }).toThrowError('cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  })

  // USER STORY 3
  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy
  // it('denies landing when weather is stormy', function() {
  //   plane.takeoff(airport);
  //   expect(airport.planes()).toNotContain(plane);
  // })
});
