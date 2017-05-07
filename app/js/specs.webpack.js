var testsContext = require.context('./../../test', true, /.spec$/);
testsContext.keys().forEach(testsContext);
