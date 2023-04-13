/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = Document & Message;

@Schema({ timestamps: true })
export class Message {
  @Prop()
  groupid: string;

  @Prop()
  username: string;

  @Prop()
  message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
