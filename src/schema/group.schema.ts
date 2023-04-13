/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type GroupDocument = Document & Group;

@Schema({ timestamps: true })
export class Group {
  @Prop()
  groupname: string;

  @Prop()
  username: string;

  @Prop()
  isLesson: boolean;

  @Prop()
  groupid: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
