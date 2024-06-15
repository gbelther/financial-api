import * as bcrypt from 'bcryptjs';
import { Hash, HashCompare, HashCompareParams } from '@/domain/cryptography';

export class BcryptAdapter implements Hash, HashCompare {
  constructor(private readonly salt: number) {}

  async hash(plainText: string): Promise<string> {
    const salt = bcrypt.genSaltSync(this.salt);
    const hashed = await bcrypt.hash(plainText, salt);
    return plainText;
  }

  async compare(params: HashCompareParams): Promise<boolean> {
    return await bcrypt.compare(params.plainText, params.hash);
  }
}
