export { flow, pipe } from 'fp-ts/function';
export {
  map,
  reverse,
  filter,
  mapWithIndex as mapWithIndexArr,
  unsafeUpdateAt,
  unsafeDeleteAt,
  elem,
  lookup,
  intersection,
  difference
} from 'fp-ts/Array';
export { groupBy } from 'fp-ts/NonEmptyArray';
export { mapWithIndex, keys, toArray, filterWithIndex, deleteAt } from 'fp-ts/Record';
export { default as deepEqual } from 'fast-deep-equal';
export { default as capitalize } from 'lodash/capitalize';

export function moveFrom<K>(from: number, to: number, arr: K[]) {
  const copyOfArray = [...arr];
  const element = copyOfArray.splice(from, 1)[0];
  copyOfArray.splice(to, 0, element);
  return copyOfArray;
}

export function isHexLight(color: string) {
  const hex = color.replace('#', '');
  const c_r = Number.parseInt(hex.slice(0, 2), 16);
  const c_g = Number.parseInt(hex.slice(2, 4), 16);
  const c_b = Number.parseInt(hex.slice(4, 6), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

export function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

/* eslint-disable @typescript-eslint/restrict-plus-operands */

export function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}
