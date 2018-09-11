import * as _ from 'underscore';
import * as mongoose from 'mongoose';
import { find } from './find';
/**
 * Mongoose plugin
 * @param {Object} schema mongoose schema.
 * @param {Object} options
 * @param {string} options.name name of the function.
 */
export function mongoosePlugin(schema, options) {
  /**
   * paginate function
   * @param {Object} param required parameter
   */
  const fn = function(param) {
    if (!this.modelName) {
      throw new Error('Model name not defined');
    }
    param = _.extend({}, param);
    const model = mongoose.model(this.modelName, schema);
    return find(model, param);
  };
  if (options && options.name) {
    schema.statics[options.name] = fn;
  } else {
    schema.statics.paginate = fn;
  }
}
