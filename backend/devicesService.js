const { ApiError, HttpStatusCodes } = require('./ApiError');

const convertToDict = (array = [], selector) =>
  array.reduce((dict, item) => {
    dict[item.id] = selector(item);
    return dict;
  }, {});

class DevicesService {
  constructor() {
    this.devices = require('./devices.json');
    this.devicesDict = convertToDict(this.devices, (item) => item);
  }

  getList() {
    return this.devices;
  }

  getDevicesQuantities() {
    return convertToDict(this.devices, ({ quantity }) => quantity);
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
    return item.quantity;
  }
}

module.exports = { DevicesService };
