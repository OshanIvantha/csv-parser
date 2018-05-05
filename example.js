'use strict';

var CSVParser = require('./index');

var c = new CSVParser('./samples/addresses.csv')

c.print();