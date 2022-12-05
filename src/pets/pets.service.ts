import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/ceate-pet.dto';
import { Pet, PetDocument } from './schemas/pets.schema';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private pets: Model<PetDocument>) {

  }

  async getAll(): Promise<Pet[]> {
    return this.pets.find().exec();
  };

  getOnlyCats() {
    return this.pets.find({petType: 'cat'});
  };

  getOnlyDogs() {
    return this.pets.find({petType: 'dog'});
  };

  getById(id: string) {
    return this.pets.findById(id);
  }
 
  create(petDto: CreatePetDto): Promise<CreatePetDto> {
    const newPet = new this.pets(petDto);
    return newPet.save()
  }

  remove(id: string) {
    this.pets.findByIdAndRemove(id);
  }
}
