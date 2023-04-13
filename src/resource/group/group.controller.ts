/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { Group, GroupDocument } from 'src/schema/group.schema';
import { GroupDto } from './group.dto';

@Controller('group')
@ApiTags('Group')
export class GroupController {
  constructor(@InjectModel(Group.name) private model: Model<GroupDocument>) {}
  @Post()
  async create(@Body() dto: GroupDto) {
    try {
      return await this.model.create({
        groupname: dto.groupname,
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
