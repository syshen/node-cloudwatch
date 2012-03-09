# node-cloudwatch

This is an AWS CloudWatch client for Node.js. For a real use-case, see [node-monitor](https://github.com/franklovecchio/node-monitor).

### Pre-Reqs

Via the command line, or `process.env`, set:


	process.env['AWS_ACCESS_KEY_ID'] = '<ID>'; 
	process.env['AWS_SECRET_ACCESS_KEY'] = '<KEY>';


Then instantiate a new client in your application:


	var REST = require('node-cloudwatch');
	var client = new REST.AmazonCloudwatchClient();
	

### Usage

To list all metrics:

	client.request('ListMetrics', {}, function (response) {
	  client.showResponse(response);
	});	
	
	
To push custom metrics:
	
	var params = {};
	
	params['Namespace'] = 'MyCustomNamespace';
	params['MetricData.member.1.MetricName'] = 'MyCustomMetric';
	params['MetricData.member.1.Unit'] = 'MyUnit';
	params['MetricData.member.1.Value'] = 'MyValue';
	params['MetricData.member.1.Dimensions.member.1.Name'] = 'InstanceID';
	params['MetricData.member.1.Dimensions.member.1.Value'] = 'i-XXXXXX';
	
	client.request('PutMetricData', params, function (response) {
	  client.showResponse(response);
	});