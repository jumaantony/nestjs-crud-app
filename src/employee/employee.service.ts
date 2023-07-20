import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from './schema/employee-schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>, // collection entity name and model type from MongoDB
    ) {}

    // fetching all documents from the database
    async getAll(){
        return await this.employeeModel.find().exec();
    }

    // inserting documents into the database
    // payload employee is converted to MongoDB Collection Model document using employeeModel
    // save() method is invoked on the document to save it to the database
    async create(employee: Employee){
        const newEmployee = new this.employeeModel(employee);
        return await newEmployee.save();
    }

    // get a single document from db
    async getByid(id: string){
        return await this.employeeModel.findById(id).exec();
    }

    // update a single document from db
    // optional new = true defines the need to return the updated document otherwise return document data before update
    async update(id: string, employee: Employee){
        return await this.employeeModel.findByIdAndUpdate(id, employee, {new: true});
    }

    // delete a single document from db
    async delete(id: string){
        await this.employeeModel.findByIdAndRemove(id);
    }
}
