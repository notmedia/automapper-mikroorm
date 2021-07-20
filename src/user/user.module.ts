import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Book, User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserProfile } from './user.profile';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User, Book] })],
  providers: [UserProfile, UserService, UserResolver],
})
export class UserModule {}
