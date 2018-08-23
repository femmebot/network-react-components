declare type Nullable<T> = {[P in keyof T]: T[P] | null}
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
declare type NonNullableObject<O> = {[P in keyof O]: NonNullable<O[P]>}
