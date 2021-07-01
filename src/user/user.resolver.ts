import { Resolver, Query } from '@nestjs/graphql';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';

import { User } from './user.entity';
import { UserView } from './user.view';
import { UserService } from './user.service';

@Resolver(UserView)
export class UserResolver {
  constructor(
    private readonly service: UserService,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  @Query(() => [UserView])
  async getUsers() {
    const users = await this.service.getUsers();

    console.log('users: ', users);

    const mapped = this.mapper.mapArray(users, UserView, User);

    console.log('mapped: ', mapped);

    return mapped;
  }
}
