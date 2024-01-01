import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/users/database/schemas/user.schema';

export enum CONTRACT_STATUS {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  FAILED = 'FAILED',
}

export type WeddingContractDocument = HydratedDocument<WeddingContract>;

@Schema({ timestamps: true })
export class WeddingContract {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({ enum: CONTRACT_STATUS, default: CONTRACT_STATUS.PENDING })
  status?: CONTRACT_STATUS;

  @Prop()
  smartContractAddress?: string;
}

export const WeddingContractSchema =
  SchemaFactory.createForClass(WeddingContract);
