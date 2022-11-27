export class CreatePetDto {
  readonly petType: 'dog' | 'cat'
  readonly name: string
  readonly age: number
  readonly city: string
  readonly district?: string
  readonly street: string
  readonly contactName: string
  readonly contactNumber: string
  readonly img: string
}