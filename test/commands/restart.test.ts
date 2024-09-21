import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('restart', () => {
  it('runs restart cmd', async () => {
    const {stdout} = await runCommand('restart')
    expect(stdout).to.contain('hello world')
  })

  it('runs restart --name oclif', async () => {
    const {stdout} = await runCommand('restart --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
