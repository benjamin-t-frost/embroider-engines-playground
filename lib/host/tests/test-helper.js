import Application from 'host/app';
import config from 'host/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
// import faker from 'fakerjs';

// // This gets included in a test chunk -- likely okay since it won't be downloaded
// console.log(faker);

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
