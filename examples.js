var REST = require('index.js');
var client = new REST.AmazonCloudwatchClient();

// Example for diskspace

/*
params = {};

client.request('ListMetrics', params, function (response) {
	client.showResponse(response);
});
*/

function poll(callback) {
	
	this.command = 'df -h | grep \'/dev/disk0s2\' | awk \'{print $5}\'';

	var exec = require('child_process').exec, child;
	child = exec(this.command, function (error, stdout, stderr) {		
		callback(stdout.toString());
	});
	
}

poll(function(response) {

	console.log('df -h returned: ' + response.replace('%', ''));
	
	params = {};
	
	params['Namespace'] = 'Isidorey Instance Metrics';
	params['MetricData.member.1.MetricName'] = 'DiskSpace';
	params['MetricData.member.1.Unit'] = 'Percent';
	params['MetricData.member.1.Value'] = response.replace('%', '');
	params['MetricData.member.1.Dimensions.member.1.Name'] = 'InstanceID';
	params['MetricData.member.1.Dimensions.member.1.Value'] = 'i-XXXXXX';

	
	client.request('PutMetricData', params, function (response) {
		client.showResponse(response);
	});
	
});
