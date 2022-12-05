import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { CreatePetDto } from './dto/ceate-pet.dto';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {

  constructor(private readonly petsService: PetsService) {}
  
  @Get('allPets')
  getPets() {
    return this.petsService.getAll();
  }

  @Get('allCats')
  getCats() {
    return this.petsService.getOnlyCats();
  }

  @Get('allDogs')
  getDogs() {
    return this.petsService.getOnlyDogs();
  }

  @Get('getOnePet')
  getDog(@Query('id') id: string) {
    return this.petsService.getById(id);
  }

  @Post('addPet')
  create(@Body() pet: CreatePetDto) {
    this.petsService.create(pet);
    return pet;
  }

  @Delete('removePet')
  remove(@Query('id') id: string): string  {
    this.petsService.remove(id);
    return 'Pet removed'
  }

}
