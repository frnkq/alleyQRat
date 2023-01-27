import QR from "../../modules/qr/";
import "@testing-library/jest-dom";

describe("QR Decoder", () => {
  test("Decodes data from a data:image/png;base65 string of a QR Code", async () => {
    const qr = await QR.encode("pol420");
    const decoded = await QR.decode(qr);
    expect(decoded).toBe("pol420");
  });
});
