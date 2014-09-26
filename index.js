var ReactCRM = require('./lib/ReactCRM.js');

module.exports = {
    getAuthenticatedApplication: function (apiKey, apiSecret, options) {
        var service = new ReactCRM(apiKey, apiSecret, options);
        return service.authenticate();
    },
    ReactCRM: ReactCRM,
    errors: require('./lib/errors.js')
};
