import {
  Entity,
  Property,
  PrimaryKey,
  OneToOne,
  IdentifiedReference,
  Reference,
} from '@mikro-orm/core';
import { AutoMap } from '@automapper/classes';

@Entity({ tableName: 'book' })
export class Book {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  @AutoMap()
  uuid!: string;

  @Property()
  @AutoMap()
  name!: string;
}

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  @AutoMap()
  uuid!: string;

  @Property()
  @AutoMap()
  name!: string;

  @Property()
  @AutoMap()
  password!: string;

  @OneToOne({
    entity: () => Book,
    owner: true,
    eager: true,
    fieldName: 'book_uuid',
    wrappedReference: true,
  })
  book!: IdentifiedReference<Book>;

  constructor(name: string, password: string, book: Book) {
    this.name = name;
    this.password = password;
    this.book = Reference.create(book);
  }
}
