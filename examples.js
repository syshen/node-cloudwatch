var REST = require('index.js');
var client = new REST.AmazonCloudwatchClient();

params = {};
//params['Action'] = 'ListMetrics';	

client.get('ListMetrics', params, function (response) {
	client.showResponse(response);
});

/*
client.post(params, function (response) {
	client.showResponse(response);
});

client.del(params, function (response) {
	client.showResponse(response);
});
*/
