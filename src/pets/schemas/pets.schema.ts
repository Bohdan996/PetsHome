import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet {
  
  @Prop()
  owner: string;

  @Prop()
  petType: 'dog' | 'cat';

  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  city: string;

  @Prop()
  district: string;

  @Prop()
  street: string;

  @Prop()
  contactNumber: string;

  @Prop()
  contactName: string;

  @Prop()
  img: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);