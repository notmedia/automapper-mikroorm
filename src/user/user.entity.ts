import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { AutoMap } from '@automapper/classes';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  @AutoMap()
  uuid!: string;

  @Property()
  // @AutoMap()
  name!: string;
}
