import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alisher1',
      password: '12345', 
      database: 'TypeORM-DB',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    BookModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
