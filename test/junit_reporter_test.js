var junit = require('../src');
var grunt = require('grunt');

exports.junit = {
    noError: function (test){
        var reporter = junit('test/generated/noerror.xml');
        var expected = grunt.file.read('test/expected/noerror.xml');
        var result;

        reporter({testsuite: 'no-error'});
        reporter({testcase: 'testcase'});
        reporter({testDone: true});

        result = grunt.file.read('test/generated/noerror.xml');
        test.equals(expected, result);

        test.done();
    },
    error: function (test){
        var reporter = junit('test/generated/error.xml');
        var expected = grunt.file.read('test/expected/error.xml');
        var error = 'The test error has failed due to: put your error here';
        var result;

        reporter({testsuite: 'error'});
        reporter({testcase: 'testcase'});
        reporter({ error: error});
        reporter({testDone: true});

        result = grunt.file.read('test/generated/error.xml');
        test.equals(expected, result);

        test.done();
    }
};