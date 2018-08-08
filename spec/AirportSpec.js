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
});
