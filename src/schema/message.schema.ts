/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Group } from './group.schema';

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
