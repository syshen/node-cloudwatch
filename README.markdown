simple-rest-client
=====

This is a rest client that works for node.js v0.4.8 and up.  It's a fairly straightforward wrapper; for something complicated, the http configuration can be easily manipulated.

Usage
-----------------------------------

Just instantiate a new client and configure it:

    var REST = require('simple-rest-client');
	var client = new REST.SimpleRestClient();
	
	var config = {
		
		host: 'my.url.net',
		version: '/v1.0',
		port: '80',
		username: 'username',
		password: 'password',
		contentType: 'application/x-www-form-urlencoded'
		
	};
	
	client.setOptions(config);
	

Add url segments, and GET or POST parameters to the request (pass in null if there aren't any):


GET Requests
-----------------------------------
	
	var segments = [];
			
		segments.push('foo');
		segments.push('bar');
	
	var getParams = {};
	
		getParams['key'] = 'value';	
				
	client.get(segments, getParams, function (response) {
		client.showResponse(response);
	});
	
POST Requests
-----------------------------------
	
	var segments = [];
			
		segments.push('foo');
		segments.push('bar');
	
	var getParams = {};
	
		getParams['key'] = 'value';	
		
	var postParams = {};
	
		postParams['key'] = 'value';	
				
	client.post(segments, getParams, postParams, function (response) {
		client.showResponse(response);
	});	
	
To POST to the body:

	postParams['body'] = 'value';
	
	
	
DELETE Requests
-----------------------------------
	
	var segments = [];
			
		segments.push('foo');
		segments.push('bar');
	
	var getParams = {};
	
		getParams['key'] = 'value';	
		
	var postParams = {};
	
		postParams['key'] = 'value';	
				
	client.del(segments, getParams, postParams, function (response) {
		client.showResponse(response);
	});
	