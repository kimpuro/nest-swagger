import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { GetUserDocs, GetAllDocs, CreateTestDocs, DeleteTestDocs } from './app.docs';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @GetAllDocs()
  getHello(): string {
    console.log('Hi');
    return this.appService.getHello();
  }

  @Post()
  @CreateTestDocs()
  createTest(@Body() body: any) {
    return { message: 'POST 성공', data: body };
  }

  @Put(':id')
  @GetUserDocs()
  updateTest(@Param('id') id: string, @Body() body: any) {
    return { message: 'PUT 성공', id, data: body };
  }

  @Delete(':id')
  @DeleteTestDocs()
  deleteTest(@Param('id') id: string) {
    return { message: 'DELETE 성공', id };
  }
}
