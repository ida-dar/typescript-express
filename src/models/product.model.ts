import { prop, getModelForClass } from '@typegoose/typegoose'

class ProductClass {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  client: string;
}

const Product = getModelForClass(ProductClass);
export default Product;
