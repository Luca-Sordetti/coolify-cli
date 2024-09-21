import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('init', () => {
  it('runs init cmd', async () => {
    const {stdout} = await runCommand('init')
    expect(stdout).to.contain('hello world')
  })

  it('runs init --name oclif', async () => {
    const {stdout} = await runCommand('init --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
