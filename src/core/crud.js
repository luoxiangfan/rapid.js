// @ts-check

import { requestSuffixes } from '../config';
import Request from './request';

class Crud extends Request {
  /**
   * Model Only Functions
   */

  /**
   * Make a GET request to a url that would retrieve a single model.
   * Prepends primaryKey if set
   *
   * @param {Number} id The model's id
   * @return {Promise}
   */
  find(id) {
    return this.model.id(id).get();
  }

  /**
   * Make a request to update or destroy a model
   *
   * @param {String} method The method (update or destroy)
   * @param {array} params Can be either (id, data) OR (data)
   * @return {Promise}
   */
  updateOrDestroy(method, ...params) {
    const urlParams = [];
    const id = params[0];
    let data = params[1];

    if (Number.isInteger(id)) {
      this.id(id);
    } else {
      [data] = params;
    }

    if (Object.prototype.hasOwnProperty.call(this.config.suffixes, method)) {
      urlParams.push(this.config.suffixes[method]);
    }

    if (method === requestSuffixes.UPDATE) {
      this.withParams(data);
    }

    return this.model.buildRequest(this.config.methods[method], urlParams);
  }

  /**
   * See updateOrDestroy
   *
   * @param {array} params
   * @return {Promise}
   */
  update(...params) {
    return this.updateOrDestroy(requestSuffixes.UPDATE, ...params);
  }

  /**
   * Alias of update
   * See updateOrDestroy
   *
   * @param {array} params
   * @return {Promise}
   */
  save(...params) {
    return this.update(...params);
  }

  /**
   * See updateOrDestroy
   *
   * @param {array} params
   * @return {Promise}
   */
  destroy(...params) {
    return this.updateOrDestroy(requestSuffixes.DESTROY, ...params);
  }

  /**
   * Sends a config.suffixes.restore request to emulate a
   * restore request
   *
   * @param {Number} id
   * @return {Promise}
   */
  restore(id) {
    const urlParams = [];

    if (Number.isInteger(id)) {
      this.id(id);
    }

    if (Object.prototype.hasOwnProperty.call(this.config.suffixes, requestSuffixes.RESTORE)) {
      urlParams.push(this.config.suffixes.restore);
    }

    return this.model.buildRequest(this.config.methods.restore, urlParams);
  }

  /**
   * Makes a request to create a new model based off the method and suffix for create
   *
   * @param {Object} data The data to be sent over for creation of model
   * @return {Promise}
   */
  create(data) {
    return this.withParams(data)
      .buildRequest(this.config.methods.create, this.config.suffixes.create);
  }

  /**
   * This sets an id for a request
   * currently it doens't work with any of the CRUD methods.
   * It should work with this.
   *
   * @param {Number} id The id of the model
   * @return {this}
   */
  id(id) {
    let params = [];

    // this is checking if primaryKey is true, not if it exists
    if (this.config.primaryKey) {
      params = [this.config.primaryKey, id];
    } else {
      params = [id];
    }

    // needs to prepend
    this.prepend(params);

    return this;
  }

  /**
   * Collection Only Functions
   */

  /**
   * Makes a GET request on a collection route
   *
   * @return {Promise}
   */
  all() {
    return this.collection.get();
  }

  /**
   * Collection and Model functions
   */

  /**
   * Makes a GET request to find a model/collection by key, value
   *
   * @param {String|Number} key The key to search by
   * @param {String|Number} value The value to search by
   * @return {Promise}
   */
  findBy(key, value) {
    const urlParams = [key];

    if (value) {
      urlParams.push(value);
    }

    return this.get(...urlParams);
  }
}

export default Crud;
