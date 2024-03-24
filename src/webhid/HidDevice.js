export default class HidDevice {
  static supports() {
    return navigator && navigator.hid ? true : false;
  }

  constructor(filter = null) {
    this.filters = filter ? [filter] : [];
    this.handle = null;
  }

  async find(index = 0) {
    console.log('[DEBUG] HidDevice.find()');

    const devices = await navigator.hid.requestDevice({filters: this.filters});
    if (devices.length <= index) {
      console.warn(`HID device (index:${index}) was not found.`);
      return null;
    }
    this.handle = devices[index];
    return this.handle;
  }

  async open() {
    console.log('[DEBUG] HidDevice.open()');

    if (!this.handle) {
      console.warn('Connot open HID device because no device handle.');
      return false;
    }
    if (this.handle.opened) {
      console.info('Already opned.');
      return true;
    }

    try {
      await this.handle.open();
      return true;
    } catch {
      console.warn('Failed to open HID device.');
      return false;
    }
  }

  async close() {
    console.log('[DEBUG] HidDevice.close()');
    
    if (!this.handle) {
      console.warn('Connot open HID device because no device handle.');
      return false;
    }
    if (!this.handle.opened) {
      console.info('Already closed.');
      return true;
    }

    try {
      await this.handle.close();
      return true;
    } catch {
      console.warn('Failed to close HID device.');
      return false;
    }
  }

  isOpened() {
    return this.handle ? this.handle.opened : false;
  }
}
