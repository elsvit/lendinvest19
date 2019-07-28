/**
 * @fileOverview Misc types
 */

type Maybe<T> = T | null | undefined;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ValueUnion<T> = T[keyof T];
type Keys<T extends object> = Array<(keyof T)>;

