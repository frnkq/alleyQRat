import QR from '../../modules/qr/';
import '@testing-library/jest-dom'

describe('QR Generator', ()=>{
  test('Generates a base64 string of a QR Code', async () => {
    const qrCode = await QR.generateQR();
    const b64dataImgHeader = 'data:image/png;base64';
    expect(qrCode).toHaveProperty("code.base64");
    expect(qrCode.code.base64.includes(b64dataImgHeader)).toBeTruthy();
  });
});
