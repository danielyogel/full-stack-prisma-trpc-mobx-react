import { getPeople } from './getPeople';
import { create } from './create';
import { t } from '../trpcServer';

export const router = t.router({
  getPeople: getPeople,
  create: create
});
