import { prop, getModelForClass } from '@typegoose/typegoose'

class EmployeeClass {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true })
  department: string;
}

const Employee = getModelForClass(EmployeeClass);
export default Employee;
