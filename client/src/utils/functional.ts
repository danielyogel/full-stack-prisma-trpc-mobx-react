import type { O } from 'ts-toolbelt';
export { flow, pipe } from 'fp-ts/function';
export { map, reverse, filter, mapWithIndex as mapWithIndexArr, unsafeUpdateAt, unsafeDeleteAt, elem, lookup, uniq, sortBy } from 'fp-ts/Array';
export { contramap } from 'fp-ts/Ord';
export { mapWithIndex, keys, toArray } from 'fp-ts/Record';
export { default as omit } from 'lodash/omit';
export { default as pick } from 'lodash/pick';
export { default as startCase } from 'lodash/startCase';
export { default as camelCase } from 'lodash/camelCase';
export { default as deepEqual } from 'lodash/isEqual';
export { default as orderBy } from 'lodash/orderBy';
export { default as capitalize } from 'lodash/capitalize';
export { default as debounce } from 'lodash/debounce';
export { default as take } from 'lodash/take';
export { default as takeRight } from 'lodash/takeRight';

import { default as _invert } from 'lodash/invert';
declare type Key = string | number | symbol;

export function invert<O extends { [P in keyof O]: Key }>(objectToInvert: O): O.Invert<O> {
  return _invert(objectToInvert) as O.Invert<O>;
}

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

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error());
      }
    };
    reader.onerror = (error) => reject(error);
  });
}
