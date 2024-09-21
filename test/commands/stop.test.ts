import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('stop', () => {
  it('runs stop cmd', async () => {
    const {stdout} = await runCommand('stop')
    expect(stdout).to.contain('hello world')
  })

  it('runs stop --name oclif', async () => {
    const {stdout} = await runCommand('stop --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
