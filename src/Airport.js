'use strict'

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
  // this._capacity = 5;
};

Airport.prototype.planes = function() { 
  return this._hangar; 
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  // else if(this.planes.length >= this._hangar) {
  //   throw new Error('cannot land - hangar is full');
  // }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('cannot take off during storm');
  }
  this._hangar = [];
  // this._hangar.pop(plane);
};
