import { ObjectType, Field } from '@nestjs/graphql';
import { AutoMap } from '@automapper/classes';

@ObjectType()
export class UserView {
  @Field()
  @AutoMap()
  uuid: string;

  @Field()
  @AutoMap()
  name: string;

  @Field()
  @AutoMap()
  password: string;
}
