import QR from '../../modules/qr/';
import '@testing-library/jest-dom'

describe('QR Encoder', ()=>{
  test('Encodes data into a data:image/png;base64 string of a QR Code', async () => {
    const qrCode = await QR.generate("messlife");
    const b64dataImgHeader = 'data:image/png;base64';
    expect(qrCode).toHaveProperty("code.base64");
    expect(qrCode.code.base64.includes(b64dataImgHeader)).toBeTruthy();
  });

  test('Next steps', async () => {
    `
      Client that reads QR
      Server that generates QR with an URI like /checkpoint/arrived/{qr_checkpoint_identifier}
      Client scans QR:
        Two API Calls:
          - /verify/im/at/checkpoint/{qr_checkpoint_identifier}?loc=lat,lon
              => (verifies location?) => Persists (userid, has_scanned_qr_uuid)
              => /checkpoint/arrived/{qr_checkpoint_identifier}?verif=has_scanned_qr_uuid
    `;
    expect(false).toBe(true);
  });
});
