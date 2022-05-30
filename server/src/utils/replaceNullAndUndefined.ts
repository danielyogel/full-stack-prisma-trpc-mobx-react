import { DeepReplace } from './DeepReplaceType';
import { includes } from '../utils/functional';

function replace<O extends {}>(object: O) {
  return JSON.parse(JSON.stringify(object, (_: any, value: any) => (includes([null, undefined], value) ? '' : value)));
}

export function replaceNullAndUndefined<O extends {}>(object: O): DeepReplace<DeepReplace<O, undefined, ''>, null, ''> {
  return replace<O>(object);
}
