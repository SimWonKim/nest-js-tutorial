import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
// import { UsersController } from './users/users.controller';
// import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from '../common/middleware/logger.middleware';

@Module({
    imports: [CatsModule],
    // controllers: [AppController, CatsController, UsersController],
    // providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // consumer.apply(LoggerMiddleWare).forRoutes('cats');
        consumer
            .apply(
                LoggerMiddleWare /**....  이 자리에 다른 미들웨어들 추가 가능.*/,
            )
            .forRoutes('cats');
    }
}
