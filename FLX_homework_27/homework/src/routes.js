const express = require('express');
const router = express.Router();
const Car = require('./handlers/car');
const car_data = require('../db/data.json');
const allowDelete = require('./middlewares/delete-authorization');

router.post('/car', async (req, res) => {
  const car = new Car(req.body);
  const isNew = await car_data.every(
    carId => carId.id !== car.id && carId.model !== car.model
  );
  if (isNew) {
    car_data.push(car);
    res.status(201).json(car);
  } else {
    res.status(409).json({ message: 'Car already exists.' });
  }
});

router.get('/car', (req, res) => {
  res.status(200).json(car_data);
});

router.get('/car/:id', async (req, res) => {
  const { id } = req.params;
  const carInstance = await car_data.filter(car => car.id === parseInt(id));
  if (carInstance.length > 0) {
    return res.status(200).json(carInstance[0]);
  } else {
    return res
      .status(404)
      .json({ message: `Car with id ${id} has not been found` });
  }
});

router.put('/car/:id', async (req, res) => {
  const { id } = req.params;
  const carInstance = await car_data.findIndex(car => car.id === parseInt(id));
  if (carInstance !== -1) {
    car_data.splice(carInstance, 1, req.body);
    res.json(car_data[carInstance]);
  } else {
    res.status(404).json({ message: `Car with id ${id} has not bee found` });
  }
});

router.delete('/car/:id', allowDelete, async (req, res) => {
  const { id } = req.params;
  const carInstance = await car_data.findIndex(car => car.id === parseInt(id));
  if (carInstance !== -1) {
    car_data.splice(carInstance, 1);
    res.json({ message: 'The car has been successfully removed' });
  } else {
    res.status(404).json({ message: `Car with id ${id} has not bee found` });
  }
});

module.exports = router;
