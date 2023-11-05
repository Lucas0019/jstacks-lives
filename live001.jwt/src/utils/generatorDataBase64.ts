interface IGeneratorDataBase64 {
  data: Record<string, unknown>;
  format: BufferEncoding;
}

export const generatorDataBase64 = ({ data, format }: IGeneratorDataBase64) => {
  if (typeof data !== "object") {
    throw new Error("The data must be an object");
  }

  const dataToStringfy = JSON.stringify(data);
  const dataToBase64 = Buffer.from(dataToStringfy).toString(format);

  if (!dataToBase64) {
    throw new Error("Error to generate data to base64");
  }

  return dataToBase64;
};
