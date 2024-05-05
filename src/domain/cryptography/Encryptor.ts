export type EncryptParams = {
  [key: string]: string;
};

export interface Encryptor {
  encrypt: (params: EncryptParams) => Promise<string>;
}
