import { sign, verify } from 'jsonwebtoken';
import {
  Decryptor,
  Encryptor,
  EncryptParams,
  Result,
} from '@/domain/cryptography';

export class JsonWebTokenAdapter implements Encryptor, Decryptor {
  constructor(
    private readonly secret: string,
    private readonly secondsToExpire: number,
  ) {}

  async encrypt(params: EncryptParams): Promise<string> {
    return sign(params, this.secret, { expiresIn: this.secondsToExpire });
  }

  async decrypt(cryptography: string): Promise<Result> {
    return verify(cryptography, this.secret) as Result;
  }
}
