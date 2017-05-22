type StyleInserter = {
  _insertCss: Function;
  _getCss: Function
};

declare module "*.scss" {
  export const _insertCss: Function;
  export const _getCss: Function;
}

