const { v4 } = require("uuid");

let itemData = [];

const getDevice = (req, res) => {
  res.json(itemData);
};

const addDevice = (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`Item "${item.name}" has been added successfully.`);
};

const getDeviceId = (req, res) => {
  const { id } = req.params;
  const itemFound = itemData.find((item) => item.id === id);
  console.log(itemFound);
  res.send(itemFound);
};

const deleteDevice = (req, res) => {
  const { id } = req.params;
  itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
  res.send(`Item with id ${id} has been deleted successfully.`);
};

const updateDevice = (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const item = itemData.find((item) => item.id === id);

  if (name) item.name = name;
  if (toppings) item.toppings = toppings;
  if (price) item.price = price;

  res.send(
    `Item with id ${id} and name ${item.name} has been updated successfully`
  );
};

module.exports = { getDevice, addDevice, getDeviceId, deleteDevice, updateDevice };
