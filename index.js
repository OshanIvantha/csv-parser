'use strict';

var fs = require('fs');

function CSVParser(filePath, delimiter){
    this.filePath = filePath;
    this.delimiter = typeof delimiter !== 'undefined' ? delimiter : ',';
    this.rawData;

    var superclass = this;
    fs.readFile(this.filePath, function read(err, data) {
        if (err) {
            throw err;
        }

        superclass.
    });
}

CSVParser.prototype.getLine = function(lineNo){

};

CSVParser.prototype.insertLine = function () {

};

CSVParser.prototype.deleteLine = function () {

};

module.exports = CSVParser;