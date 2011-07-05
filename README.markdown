node-cloudwatch
=====

This is a CloudWatch wrapper (based on node-ec2 and simple-rest-client) mostly used for pushing custom metrics.  For a real use-case, see examples.js.

Usage
-----------------------------------

Just instantiate a new client:

	var REST = require('node-cloudwatch');
	var client = new REST.AmazonCloudwatchClient();

Requests (Part 1)
-----------------------------------

	params = {};

	client.request('ListMetrics', params, function (response) {
		client.showResponse(response);
	});
	
		
Requests (Part 2)
-----------------------------------
	
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