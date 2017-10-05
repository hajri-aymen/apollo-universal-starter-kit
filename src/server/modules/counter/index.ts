import Count from './sql';

import Feature from '../connector';
import createResolvers from './resolvers';
import * as schema from './schema.graphqls';

export default new Feature({
  schema,
  createResolversFunc: createResolvers,
  createContextFunc: () => ({ Count: new Count() })
});
