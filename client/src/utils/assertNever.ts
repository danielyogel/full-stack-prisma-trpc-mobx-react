/* eslint-disable @typescript-eslint/restrict-plus-operands */

export function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}
