import { IRetaxConfig } from 'retax-core';
import { IBootstrapper } from 'retax-utils';

export interface IClientBootstrapper extends IBootstrapper<
  IRetaxConfig,
  Element,
  Promise<void>
> {
  reload(): void;
}
