import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';
import { WrapResponseInterceptor } from './interceptors/wrap-response/wrap-response.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout/timeout.interceptor';

@Module({
  imports: [ConfigModule],
  providers: [
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_GUARD, useClass: ApiKeyGuard },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    { provide: APP_INTERCEPTOR, useClass: WrapResponseInterceptor },
  ],
})
export class CommonModule {}
