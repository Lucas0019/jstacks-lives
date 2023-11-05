import { generateSignature } from "../../utils/generateSignature";
import type * as T from "./types";

export const verify = ({ token, secret }: T.IVerifyOptions) => {
  const [headerSent, payloadSent, signatureSent] = token.split(".");

  const signature = generateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  if (signature !== signatureSent) {
    throw new Error("Invalid JWT token");
  }

  const decodedPayload = Buffer.from(payloadSent, "base64").toString("utf-8");

  const payload = JSON.parse(decodedPayload);

  if (payload.exp < Date.now()) {
    throw new Error("Expired JWT token");
  }

  return payload;
};
