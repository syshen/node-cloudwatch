# node-cloudwatch

This is an Amazon CloudWatch wrapper used for pushing custom metrics (based on node-ec2 and simple-rest-client).  For a real use-case, see `examples.js` or [node-monitor](https://github.com/franklovecchio/node-monitor).

### Usage

Via the command line, or `process.env`, set:


   process.env['AWS_ACCESS_KEY_ID'] = '<ID>'; 
   process.env['AWS_SECRET_ACCESS_KEY'] = '<KEY>';


Then instantiate a new client in your application:

	var REST = require('node-cloudwatch');
	var client = new REST.AmazonCloudwatchClient();
	

### Requests (Part 1)


	params = {};

	client.request('ListMetrics', params, function (response) {
		client.showResponse(response);
	});
	
		
# Requests (Part 2)

	
	params = {};
	
	params['Namespace'] = 'MyCustomNamespace';
	params['MetricData.member.1.MetricName'] = 'MyCustomMetric';
	params['MetricData.member.1.Unit'] = 'MyUnit';
	params['MetricData.member.1.Value'] = 'MyValue';
	params['MetricData.member.1.Dimensions.member.1.Name'] = 'InstanceID';
	params['MetricData.member.1.Dimensions.member.1.Value'] = 'i-XXXXXX';

	
	client.request('PutMetricData', params, function (response) {
		client.showResponse(response);
	});