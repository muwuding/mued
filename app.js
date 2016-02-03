'use strict';

var express = require('express');
var app = express();

app.static('dist');

app.listen(9000);