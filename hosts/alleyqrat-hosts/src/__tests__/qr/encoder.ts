import QR from "../../modules/qr/";
import "@testing-library/jest-dom";

describe("QR Encoder", () => {
  test("Encodes data into a data:image/png;base64 string of a QR Code", async () => {
    const qrCode = await QR.encode("messlife");
    const b64dataImgHeader = "data:image/png;base64";
    expect(qrCode).toHaveProperty("code.base64");
    expect(qrCode.code.base64.includes(b64dataImgHeader)).toBeTruthy();
  });
});
