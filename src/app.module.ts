import { Module } from '@nestjs/common';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join('schema.gql'),
      playground: true,
      introspection: true,
    }),

    AutomapperModule.forRoot({
      options: [{ name: 'classes', pluginInitializer: classes }],
      singular: true,
    }),

    MikroOrmModule.forRoot({
      type: 'postgresql',
      dbName: 'test',
      user: 'test',
      password: 'test',
      host: '127.0.0.1',
      port: 5432,
      autoLoadEntities: true,
      debug: true,
    }),

    UserModule,
  ],
})
export class AppModule {}
