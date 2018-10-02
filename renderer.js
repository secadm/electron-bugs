// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



fetch('https://server.test-cors.org/server?id=1217060&enable=true&status=200&credentials=false&methods=POST%2C%20GET&expose_headers=X-Cors-Demo-Header%2CContent-Length&response_headers=X-Cors-Demo-Header%3A%20test', {
	method: 'POST',
	mode: 'cors'
}).then((res) => {
	console.log(res.headers);
	document.write(`Fetch completed.<br/>Fetch delivered headers: <br/><pre>${JSON.stringify(res.headers)}</pre><br/>`);
	res.json().then((json) => {
		console.log(json);
		var jr = json[0];
		document.write(`Request type: ${jr.requestType}<br/>`);
		document.write('Request headers:<br/><pre>');
		for (let hdr of Object.keys(jr.request.headers)) {
			document.write(`${hdr}: ${jr.request.headers[hdr]}<br/>`);
		}
		document.write('</pre>Sent response headers:<br/><pre>');
		for (let hdr of Object.keys(jr.response.headers)) {
			document.write(`${hdr}: ${jr.response.headers[hdr]}<br/>`);
		}
		document.write('</pre><br/>');
		document.write('</pre><br/>');
		startXHRTest();
	});
}).catch((err) => console.err(err));

function startXHRTest() {
	var url = 'https://server.test-cors.org/server?id=6200431&enable=true&status=200&credentials=false&methods=POST%2C%20GET&expose_headers=X-Cors-Demo-Header%2C%20Content-Length&response_headers=X-Cors-Demo-Header%3Atest';
	var method = 'POST';
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);

	xhr.onload = function () {
		document.write(`XMLHttpRequest.getAllResponseHeaders() data: <br/><pre>${xhr.getAllResponseHeaders()}</pre>`);
		// Success code goes here.
	};

	xhr.onerror = function () {
		// Error code goes here.
	};

	xhr.send();
}