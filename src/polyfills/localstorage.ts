export namespace LocalStoragePolyfill {
  (() => {
    function isSupported() {
      const item = 'localStoragePollyfill';
      try {
        localStorage.setItem(item, item);
        localStorage.removeItem(item);
        return true;
      } catch (e) {
        return false;
      }
    }

    if (!isSupported()) {
      try {
        Storage.prototype._data = {};

        Storage.prototype.setItem = function (id, val) {
          return this._data[ id ] = String(val);
        };

        Storage.prototype.getItem = function (id) {
          return this._data.hasOwnProperty(id) ? this._data[ id ] : undefined;
        },

          Storage.prototype.removeItem = function (id) {
            return delete this._data[ id ];
          },

          Storage.prototype.clear = function () {
            return this._data = {};
          }
      } catch (e) {
        console.error('localStorage pollyfill error: ', e);
      }
    }
  })();
}
