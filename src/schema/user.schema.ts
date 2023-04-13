/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MessageDocument = Document & Message;

@Schema({ timestamps: true })
export class Message {
  @Prop()
  id: string;

  @Prop()
  username: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
