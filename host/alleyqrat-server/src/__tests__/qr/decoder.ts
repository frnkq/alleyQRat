import QR from '../../modules/qr/';
import '@testing-library/jest-dom'

describe('QR Decoder', ()=>{
  test('Decodes data from a data:image/png;base65 string of a QR Code', async () => { 
    const qr = await QR.generate("pol420");
    console.log("Have my qr", qr);
    const decoded = await QR.decode(qr);
    expect(decoded).toBe("pol420");;
  });
});
