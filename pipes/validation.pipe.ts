import { Injectable, ValidationPipe as VP } from '@nestjs/common';

@Injectable()
export class ValidationPipe extends VP {
  constructor() {
    super({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    });
  }
}
