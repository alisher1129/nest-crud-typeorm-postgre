import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, Res } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { TestInterceptor } from './interceptor/test.interceptor';
import { Request , Response } from 'express';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  //Interceptor 
  //In interceptor we can handle both request and response, we can also change the response in interceptor 
  @Post()
  @UseInterceptors(TestInterceptor)
  create()  {
    return  "this is response";
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
