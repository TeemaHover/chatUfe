import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './resource/message/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { GroupModule } from './resource/group/group.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    MongooseModule.forRoot(appConfig().dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: appConfig().dbName,
    }),
    MessageModule,
    GroupModule,
  ],
})
export class AppModule {}
