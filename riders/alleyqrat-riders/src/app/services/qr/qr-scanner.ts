export default abstract class QrScanner {
  constructor() {}

  abstract scanQr(): Promise<any>;
}
