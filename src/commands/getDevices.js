const {Command, flags} = require('@oclif/command')

class GetDevicesCommand extends Command {
  async run() {
    const {flags} = this.parse(GetDevicesCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/getDevices.js`)
  }
}

GetDevicesCommand.description = `Describe the command here
...
Extra documentation goes here
`

GetDevicesCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = GetDevicesCommand
