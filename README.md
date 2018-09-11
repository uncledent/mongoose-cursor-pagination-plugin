# mongoose-cursor-pagination-plugin

Cursor pagination plugin for mongoose

[Based on](https://github.com/mixmaxhq/mongo-cursor-pagination)

## Install

```npm i mongoose-cursor-pagination-plugin --save```

## How to use:

yourSchema.plugin(MongoPaging.mongoosePlugin);

Initialize Your Schema

```js
const MongoPaging = require('mongoose-cursor-pagination-plugin');
const mongoose = require('mongoose');
const counterSchema = new mongoose.Schema({ counter: Number });
```

Plug the `mongoosePlugin`.

```js
// this will add paginate function.
counterSchema.plugin(MongoPaging.mongoosePlugin);

const counter = mongoose.model('counter', counterSchema);

// default function is "paginate"
counter.paginate({ limit: 10 }).then(result => {
  console.log(result);
});
```

Performs a find() query on a passed-in Mongo collection, using criteria you specify. The results
are ordered by the paginatedField.

@param {MongoCollection} collection A collection object returned from the MongoDB library's
or the mongoist package's `db.collection(<collectionName>)` method.
@param {Object} params
-query {Object} The find query.
-limit {Number} The page size. Must be between 1 and `config.MAX_LIMIT`.
-fields {Object} Fields to query in the Mongo object format, e.g. {\_id: 1, timestamp :1}.
The default is to query all fields.
-paginatedField {String} The field name to query the range for. The field must be: 1. Orderable. We must sort by this value. If duplicate values for paginatedField field
exist, the results will be secondarily ordered by the \_id. 2. Indexed. For large collections, this should be indexed for query performance. 3. Immutable. If the value changes between paged queries, it could appear twice. 4. Complete. A value must exist for all documents.
The default is to use the Mongo built-in '\_id' field, which satisfies the above criteria.
The only reason to NOT use the Mongo \_id field is if you chose to implement your own ids.
-sortAscending {Boolean} True to sort using paginatedField ascending (default is false - descending).
-next {String} The value to start querying the page.
-previous {String} The value to start querying previous page.
@param {Function} done Node errback style function.

```

```
