import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('deploy', () => {
  it('runs deploy cmd', async () => {
    const {stdout} = await runCommand('deploy')
    expect(stdout).to.contain('hello world')
  })

  it('runs deploy --name oclif', async () => {
    const {stdout} = await runCommand('deploy --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
