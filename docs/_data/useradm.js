yarn run v1.3.2
$ /Users/yongjhih/works/mender-cli/node_modules/.bin/swagger-codegen-axios-flow cli
#!/usr/bin/env node

const Api = require('swagger').default;
const api = new Api();

require('yargs')
  .command('postAuthLogin  ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.postAuthLogin().then(console.log, console.error);
  })
  .command('getUsers  ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.getUsers().then(console.log, console.error);
  })
  .command('postUsers   ', '', (yargs) => {
    yargs
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
    yargs
  }, (argv) => {
    return api.getSettings().then(console.log, console.error);
  })
  .command('postSettings   ', '', (yargs) => {
    yargs
  }, (argv) => {
    return api.postSettings().then(console.log, console.error);
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

Done in 1.21s.
