import { generateSignature } from "../../utils/generateSignature";
import { generatorDataBase64 } from "../../utils/generatorDataBase64";
import type * as T from "./types";

export const sign = ({ data, exp, secret }: T.ISignOptions) => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    ...data,
    iat: Math.floor(Date.now() / 1000), // issued at
    exp, // expiration time
  };

  const headerBase64 = generatorDataBase64({
    data: header,
    format: "base64url",
  });

  const payloadBase64 = generatorDataBase64({
    data: payload,
    format: "base64url",
  });

  const signature = generateSignature({
    header: headerBase64,
    payload: payloadBase64,
    secret,
  });

  const jwt = `${headerBase64}.${payloadBase64}.${signature}`;

  return jwt;
};
