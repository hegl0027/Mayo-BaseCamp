/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare module '*svg' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  let _: string;
  export default _;
}

declare module '*.html' {
  let _: string;
  export default _;
}

declare module '*.css' {
  let _: string;
  export default _;
}
