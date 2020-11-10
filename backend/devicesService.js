const { ApiError, HttpStatusCodes } = require('./ApiError');

const convertToDict = (array = []) =>
  array.reduce((dict, item) => {
    dict[item.id] = item;
    return dict;
  }, {});

class DevicesService {
  constructor() {
    this.devices = require('./devices.json');
    this.devicesDict = convertToDict(this.devices);
  }

  getList() {
    return this.devices;
  }

  getItem(id) {
    const { [id]: item } = this.devicesDict;

    if (!item) {
      throw new ApiError('Item not found', HttpStatusCodes.NOT_FOUND);
    }

    return item;
  }

  changeItemQuantity(id, delta) {
    const item = this.getItem(id);
    const { quantity } = item;

    if (quantity + delta < 0) {
      throw new ApiError('Quantity exceeds the available stock', HttpStatusCodes.BAD_REQUEST);
    }

    item.quantity = quantity + delta;
    return item;
  }
}

module.exports = { DevicesService };
