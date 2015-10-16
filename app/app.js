// Modules which you authored in this project are intended to be
// imported through new ES6 syntax.
import { getPageTitle, getCopyright } from './home/home-default';

// Node.js modules and those from npm
// are required the same way as always.
var os = require('os');
var app = require('remote').require('app');
var jetpack = require('fs-jetpack').cwd(app.getAppPath());

// Holy crap! This is a browser window with HTML and stuff, but I can read
// files like it is node.js! Welcome to the awesome world of Electron :)
console.log(jetpack.read('package.json', 'json'));

// window.env contains data from config/env_XXX.json file.
var envName = window.env.name;

document.addEventListener('DOMContentLoaded', function() {
    document.title = getPageTitle();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = envName;
    document.getElementById('copyright-info').innerHTML = getCopyright();
});
