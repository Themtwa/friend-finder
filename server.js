const express = require('express');

expressApp = express();
let PORT = process.env.PORT || 8080;

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());

require('./app/routing/apiRoutes')(expressApp);
require('./app/routing/htmlRoutes')(expressApp);

expressApp.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
});