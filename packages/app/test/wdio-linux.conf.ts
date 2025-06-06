import { join } from 'path';
import { config as commonConfig } from './wdio-common.conf';

const config: WebdriverIO.Config = {
  ...commonConfig,
  capabilities: [
    {
      browserName: 'electron',
      'wdio:electronServiceOptions': {
        appBinaryPath: join(
          process.cwd(),
          'packages',
          'linux-unpacked',
          'mockoon'
        ),
        appArgs: ['no-sandbox', 'user-data-dir=' + join(process.cwd(), 'tmp')]
      }
    }
  ]
};

export { config };
