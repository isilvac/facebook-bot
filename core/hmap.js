
/**
 * Base store class built around ES6 Weak Map
 * @export
 * @class Store
 */
class HMap {
  constructor() {
    this.data = new Map();
  }

  /**
   * Get item in store by case insensitive id
   *
   * @param {String} id Unique key for retrieval
   * @returns {Object} Value found in store
   */
  get(id) {
    return this.data.get(String(id));
  }

  /**
   * Set item in store by case insensitive id
   *
   * @param {String} id Unique key for retrieval
   * @param {Object} value Object to add to store
   * @returns {Object} Value set in store
   */
  set(id, value) {
    return this.data.set(String(id), value);
  }

  /**
   * Check if item in store by case insensitive id
   *
   * @param {String} id Unique key for retrieval
   * @returns {Boolean} true found in store
   */
  has(id) {
    return this.data.has(String(id));
  }

  /**
   * Delete item in store by case insensitive id
   *
   * @param {String} id Unique key for retrieval
   * @returns {Object} deleted object
   */
  delete(id) {
    const deleted = this.get(String(id));
    this.data.delete(String(id));
    return {deleted};
  }

  /**
   * Check if item in store by case insensitive id
   *
   * @returns {Object} instance of class
   */
  reset() {
    this.data.clear();
    return this;
  }

  /**
   * Indicates the Map size (# of elements)
   *
   * @returns {integer} number of elements
   */
  size() {
    return this.data.size;
  }
}

module.exports = HMap;