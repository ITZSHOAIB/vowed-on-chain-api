import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from 'src/users/database/schemas/user.schema';

export type WeddingContractDocument = HydratedDocument<WeddingContract>;

@Schema({ timestamps: true })
export class WeddingContract {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  owner: Types.ObjectId;

  @Prop({ required: true })
  smartContractAddress: string;
}

export const WeddingContractSchema =
  SchemaFactory.createForClass(WeddingContract);
