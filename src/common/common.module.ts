import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyGuard } from './guards/api-key/api-key.guard';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class CommonModule {}
