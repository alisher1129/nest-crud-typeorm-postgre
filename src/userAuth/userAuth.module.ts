import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [PassportLocalStrategy ],
})
export class userAuth {}
