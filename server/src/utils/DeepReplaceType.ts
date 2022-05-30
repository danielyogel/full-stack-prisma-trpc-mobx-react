export type DeepReplace<T, C, A> = T extends C
  ? A
  : T extends object
  ? {
      [P in keyof T]: DeepReplace<T[P], C, A>;
    }
  : T;
