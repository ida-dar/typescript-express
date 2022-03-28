import { prop, getModelForClass } from '@typegoose/typegoose'

class DepartmentClass {
  @prop({ required: true })
  name: string;
}

const Department = getModelForClass(DepartmentClass);
export default Department;
