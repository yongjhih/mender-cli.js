#!/usr/bin/env node

const Api = require('mender').default;
const api = new Api();

require('yargs')
  .command('login <username> <password>', '', (yargs) => {
  }, (argv) => {
    return api.login(argv.username, argv.password).then(console.log, console.error);
  })
  .command('getUsers  ', '', (yargs) => {
  }, (argv) => {
    return api.getUsers().then(console.log, console.error);
  })
  .command('postUsers   ', '', (yargs) => {
  }, (argv) => {
    return api.postUsers().then(console.log, console.error);
  })
  .command('getUsersById <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getUsersById(argv.id).then(console.log, console.error);
  })
  .command('putUsersById <id>   ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.putUsersById(argv.id).then(console.log, console.error);
  })
  .command('deleteUsersById <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.deleteUsersById(argv.id).then(console.log, console.error);
  })
  .command('getSettings  ', '', (yargs) => {
  }, (argv) => {
    return api.getSettings().then(console.log, console.error);
  })
  .command('postSettings   ', '', (yargs) => {
  }, (argv) => {
    return api.postSettings().then(console.log, console.error);
  })
  .command('getDevices  [page] [per_page] [sort] [has_group] ', '', (yargs) => {
    yargs
      .positional('page', {
          describe: '',
      })
      .positional('per_page', {
          describe: '',
      })
      .positional('sort', {
          describe: '',
      })
      .positional('has_group', {
          describe: '',
      })
  }, (argv) => {
    return api.getDevices(argv.page, argv.per_page, argv.sort, argv.has_group).then(console.log, console.error);
  })
  .command('getDevice <id>', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getDevices(argv.id).then(console.log, console.error);
  })
  .command('removeDevice  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.removeDevice(argv.id).then(console.log, console.error);
  })
  .command('getGroup  <id> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.getGroup(argv.id).then(console.log, console.error);
  })
  .command('addGroupDevice  <id>  ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
  }, (argv) => {
    return api.addGroupDevice(argv.id).then(console.log, console.error);
  })
  .command('removeGroupDevice  <id> <name> ', '', (yargs) => {
    yargs
      .positional('id', {
          describe: '',
      })
      .positional('name', {
          describe: '',
      })
  }, (argv) => {
    return api.removeGroupDevice(argv.id, argv.name).then(console.log, console.error);
  })
  .command('getGroups ', '', (yargs) => {
  }, (argv) => {
    return api.getGroups().then(console.log, console.error);
  })
  .command('getGroupDevices <name> [page] [per_page]', '', (yargs) => {
    yargs
      .positional('page', {
          describe: '',
      })
      .positional('per_page', {
          describe: '',
      })
      .positional('name', {
          describe: '',
      })
  }, (argv) => {
    return api.getGroupDevices(argv.page, argv.per_page, argv.name).then(console.log, console.error);
  })

  .command('getAdmissionDevices  [status] [page] [per_page] [device_id] ', '', (yargs) => {
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
    return api.getAdmissionDevices(argv.status, argv.page, argv.per_page, argv.device_id).then(console.log, console.error);
  })
  .command('postDevices   ', '', (yargs) => {
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
  .fail((msg, err) => {
    console.error(msg);
    console.error(err);
  }).argv;
