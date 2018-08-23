// in order to make it impossible to confuse boardids and boardshortlinks and
// the like, we do this.
// https://github.com/microsoft/typescript/issues/202#issuecomment-362068862
declare class OpaqueTag<S extends string> {
  private tag: S
}

declare type Opaque<T, S extends string> = T & OpaqueTag<S>
