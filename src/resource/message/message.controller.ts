/* eslint-disable prettier/prettier */
import { Body, Controller, Post, HttpException, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/schema/message.schema';
import { MessageDocument } from 'src/schema/user.schema';
import { MessageDto } from './message.dto';

@Controller('message')
export class MessageController {
  constructor(
    @InjectModel(Message.name) private model: Model<MessageDocument>,
  ) {}
  @Post()
  async create(@Body() dto: MessageDto) {
    try {
      return await this.model.create({
        message: dto.message,
        groupid: dto.groupid,
        username: dto.username,
      });
    } catch (error) {
      console.error(error.message);
      throw new HttpException(error.message, 500);
    }
  }

  @Get()
  async getAll() {
    try {
      return await this.model.find();
    } catch (error) {
      console.error(error.message);
      throw new HttpException(error.message, 500);
    }
  }
}
