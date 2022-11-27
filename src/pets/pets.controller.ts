import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { CreatePetDto } from './dto/ceate-pet.dto';

@Controller('pets')
export class PetsController {
  
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

  @Get('getOneDog')
  getDog(@Query('id') id: string): string {
    return 'one dog ' + id;
  }

  @Get('getOneDog')
  getCat(@Query('id') id: string): string {
    return 'one cat ' + id;
  }

  @Post('addPet')
  create(@Body() pet: CreatePetDto): CreatePetDto  {
    return pet
  }

}
