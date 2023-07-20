import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './schema/employee-schema';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService:EmployeeService){}

    // HHTP End Points
    @Get() // this decorator makes our method an http get endpoint
    async getAll(){
        return await this.employeeService.getAll();
    }

    // this decorator makes our method an http post endpoint
    // @Body() decorator is used to extract the payload from the request body
    // @Body() decorator reads form data as Employee type
    // create() is invoked to save new item to the database
    //
    @Post()
    async create(@Body() employee:Employee){
        return await this.employeeService.create(employee);
    }

    // Get by id endpoint. It contains a dynamic route parameter id
    @Get('/:id')
    async getById(@Param("id") id: string){
        return await this.employeeService.getByid(id);
    }

    //http put endpoint with a dynamic route parameter id
    // @Param decorator reads the id from the route
    // @Body decorator reads the form data to be updated
    @Put('/:id')
    async update(@Param("id") id: string, @Body() employee: Employee){
        return await this.employeeService.update(id, employee);
    }

    @Delete('/:id')
    async delete(@Param("id") id: string){
        return await this.employeeService.delete(id);
    }
}
