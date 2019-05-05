/**
 * Car model
 * @param {Object} obj - An object.
 * @param {Number} obj.id - id.
 * @param {String} obj.brand- brand.
 * @param {String} obj.model - model.
 * @param {Number} obj.engineVolume - engineVolume.
 * @param {Number} obj.year - year.
 */

class Car {
  constructor({ id, brand, model, engineVolume, year }) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.engineVolume = engineVolume;
    this.year = year;
  }
}

module.exports = Car;
