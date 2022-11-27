import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPets(): string {
    return 'all'
  }

  @Get('/allCats')
  getCats(): string {
    return 'cats';
  }

  @Get('/allDogs')
  getDogs(): string {
    return 'dogs';
  }
}
