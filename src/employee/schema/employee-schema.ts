import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ collection: 'Employee'}) // map the entity with MongoDB collection by Specifying the collection name inside the Schema Attribute
export class Employee {
    // Class Properties are mapped with MongoDB document fields using @Prop() decorator
    @Prop()
    name: string;

    @Prop()
    role: string;

    @Prop()
    experience: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
