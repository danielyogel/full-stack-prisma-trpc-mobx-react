import type { DeepReplace } from "./DeepReplaceType";
import { includes } from "../utils/functional";

function replace<O extends Record<string, unknown>>(object: O) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return JSON.parse(JSON.stringify(object, (_: any, value: any) => (includes([null, undefined], value) ? "" : value)));
}

export function replaceNullAndUndefined<O extends Record<string, unknown>>(object: O): DeepReplace<DeepReplace<O, undefined, "">, null, ""> {
  return replace<O>(object);
}
