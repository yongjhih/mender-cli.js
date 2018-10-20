yarn run v1.3.2
$ /Users/yongjhih/works/mender-cli/node_modules/.bin/swagger-codegen-axios-flow cli
#!/usr/bin/env node

const Api = require('swagger').default;
const api = new Api();

require('yargs')
  .command('getDevices  [status] [page] [per_page] [device_id] ', '', (yargs) => {
    yargs
      .positional('status', {
          describe: '',
      })
      .positional('page', {
          describe: '',
      })
      .positional('per_page', {
          describe: '',
      })
      .positional('device_id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDevices(argv.status, argv.page, argv.per_page, argv.device_id).then(console.log, console.error);
  })
  .command('postDevices   ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.postDevices().then(console.log, console.error);
  })
  .command('getDevicesById  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDevicesById(argv.id).then(console.log, console.error);
  })
  .command('putDevicesById  <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.putDevicesById(argv.id).then(console.log, console.error);
  })
  .command('deleteDevicesById  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.deleteDevicesById(argv.id).then(console.log, console.error);
  })
  .command('getDevicesByIdStatus  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDevicesByIdStatus(argv.id).then(console.log, console.error);
  })
  .command('putDevicesByIdStatus  <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.putDevicesByIdStatus(argv.id).then(console.log, console.error);
  })
  .option('verbose', {
    alias: 'v',
    default: false
  })
  .option('h', {
    alias: 'help',
    description: 'display help message'
  })
  .help('help')
  .fail((msg, err) => {
    console.error(msg);
    console.error(err);
  }).argv;

Done in 1.40s.
