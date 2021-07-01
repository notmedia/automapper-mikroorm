import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    @InjectRepository(User) private readonly repo: EntityRepository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.repo.findAll();
  }
}
