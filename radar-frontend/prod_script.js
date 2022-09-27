/* eslint-disable no-undef */
const { execSync } = require('child_process');
execSync('npm install', { stdio: 'inherit' });
process.env.NODE_ENV = 'production';
execSync(`webpack --progress --env ${process.env.NODE_ENV}`,
    { stdio: 'inherit' }
);