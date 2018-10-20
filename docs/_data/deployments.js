#!/usr/bin/env node

const Api = require('swagger').default;
const api = new Api();

require('yargs')
  .command('getDeployments  [status] [search] [page] [per_page] [created_before] [created_after] ', '', (yargs) => {
    yargs
      .positional('status', {
          describe: '',
      })
      .positional('search', {
          describe: '',
      })
      .positional('page', {
          describe: '',
      })
      .positional('per_page', {
          describe: '',
      })
      .positional('created_before', {
          describe: '',
      })
      .positional('created_after', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeployments(argv.status, argv.search, argv.page, argv.per_page, argv.created_before, argv.created_after).then(console.log, console.error);
  })
  .command('postDeployments   ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.postDeployments().then(console.log, console.error);
  })
  .command('getDeploymentsById  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeploymentsById(argv.id).then(console.log, console.error);
  })
  .command('putDeploymentsByDeploymentIdStatus  <deployment_id>  ', '', (yargs) => {
    yargs
      .positional('deployment_id', {
          describe: '',
      })
  }, (argv) => {
    return api.putDeploymentsByDeploymentIdStatus(argv.deployment_id).then(console.log, console.error);
  })
  .command('getDeploymentsByDeploymentIdStatistics  <deployment_id> ', '', (yargs) => {
    yargs
      .positional('deployment_id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeploymentsByDeploymentIdStatistics(argv.deployment_id).then(console.log, console.error);
  })
  .command('getDeploymentsByDeploymentIdDevices  <deployment_id> ', '', (yargs) => {
    yargs
      .positional('deployment_id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeploymentsByDeploymentIdDevices(argv.deployment_id).then(console.log, console.error);
  })
  .command('getDeploymentsByDeploymentIdDevicesByDeviceIdLog  <deployment_id> <device_id> ', '', (yargs) => {
    yargs
      .positional('deployment_id', {
          describe: '',
      })
      .positional('device_id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeploymentsByDeploymentIdDevicesByDeviceIdLog(argv.deployment_id, argv.device_id).then(console.log, console.error);
  })
  .command('deleteDeploymentsDevicesById <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.deleteDeploymentsDevicesById(argv.id).then(console.log, console.error);
  })
  .command('getDeploymentsReleases  [name] ', '', (yargs) => {
    yargs
      .positional('name', {
          describe: '',
      })
  }, (argv) => {
    return api.getDeploymentsReleases(argv.name).then(console.log, console.error);
  })
  .command('getArtifacts ', '', (yargs) => {
  }, (argv) => {
    return api.getArtifacts().then(console.log, console.error);
  })
  .command('postArtifacts     ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.postArtifacts().then(console.log, console.error);
  })
  .command('getArtifactsById  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getArtifactsById(argv.id).then(console.log, console.error);
  })
  .command('putArtifactsById  <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.putArtifactsById(argv.id).then(console.log, console.error);
  })
  .command('deleteArtifactsById  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.deleteArtifactsById(argv.id).then(console.log, console.error);
  })
  .command('getArtifactsByIdDownload  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getArtifactsByIdDownload(argv.id).then(console.log, console.error);
  })
  .command('getLimitsStorage  ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.getLimitsStorage().then(console.log, console.error);
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

Done in 2.99s.
