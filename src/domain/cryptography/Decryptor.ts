export type Result = {
  [key: string]: string;
};

export interface Decryptor {
  decrypt: (cryptography: string) => Promise<Result>;
}
