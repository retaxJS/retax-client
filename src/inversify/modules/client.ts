import { KernelModule, interfaces } from 'inversify';

import {
  IClientBootstrapper, ClientBootstrapper,
} from '../../bootstrap';

import {
  CLIENT_BOOTSTRAPPER,
} from '../identifiers';

export default new KernelModule((bind: interfaces.Bind) => {
  bind<IClientBootstrapper>(CLIENT_BOOTSTRAPPER).to(ClientBootstrapper);
});
