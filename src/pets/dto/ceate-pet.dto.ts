export class CreatePetDto {
  readonly owner: string
  readonly petType: 'dog' | 'cat'
  readonly name: string
  readonly age: string
  readonly city: string
  readonly district?: string
  readonly street: string
  readonly contactName: string
  readonly contactNumber: string
  readonly img: string
}