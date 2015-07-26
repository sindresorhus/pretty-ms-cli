'use strict';
var test = require('ava');
var childProcess = require('child_process');

test(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['1'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(stdout.trim() === '1ms');
	});
});
