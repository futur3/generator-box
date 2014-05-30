'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var BoxGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Box generator!'));

    var currentDir = process.cwd()
      , tmp = currentDir.split('/')
      , cwd = tmp[tmp.length-1]
      , prompts = [
      {
        name: 'boxName',
        message: 'Gimme a fucking box name!',
        default: cwd
      },
      {
        name: 'hasBrand',
        message: 'Does this box require a brandization? [Y/N]',
        default: 'N'
      },
      {
        name: 'hasRactive',
        message: 'Wanna ractive on this, uh? [Y/N]',
        default: 'N'
      }
    ];

    this.prompt(prompts, function (props) {
      var reg = RegExp(/^y/i);
      this.boxName = props.boxName;
      this.hasBrand = reg.test(props.hasBrand);
      this.hasRactive = reg.test(props.hasRactive);
      //
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('views');
    this.mkdir('styles');
    //
    this.template('_package.json', 'package.json');
    this.copy('gitignore', '.gitignore');
  },

  projectfiles: function () {
    this.template('_index.js', 'index.js');
    this.template('views/_template.jade', 'views/template.jade');
    this.template('styles/_main.less', 'styles/main.less');
  }
});

module.exports = BoxGenerator;
