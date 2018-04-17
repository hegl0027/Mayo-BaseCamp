export class DialogOptionsModel<T = any> {

  public backdrop = true;

  public closeOutsideClick = true;

  public beforeDismiss: Function;

  public keyboard = true;

  public top?: string;

  public windowClass?: string;

  public data: T;
}
