export class Product {
  $id: string;
  $name: string;
  $price: number;
  $description: string;

  get id() {
    return this.$id;
  }
  set id(value) {
    this.$id = value;
  }

  get name() {
    return this.$name;
  }
  set name(value) {
    this.$name = value;
  }

  get price() {
    return this.$price;
  }
  set price(value) {
    this.$price = value;
  }

  get description() {
    return this.$description;
  }
  set description(value) {
    this.$description = value;
  }
}