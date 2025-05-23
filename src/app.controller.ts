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
import { GetUserDocs } from './app.docs';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Hi');
    return this.appService.getHello();
  }

  @Post()
  createTest(@Body() body: any) {
    return { message: 'POST 성공', data: body };
  }

  @Put(':id')
  @GetUserDocs()
  updateTest(@Param('id') id: string, @Body() body: any) {
    return { message: 'PUT 성공', id, data: body };
  }

  @Delete(':id')
  @ApiOperation({ summary: '테스트용 DELETE 엔드포인트' })
  @ApiParam({ name: 'id', required: true, description: '삭제할 리소스의 ID' })
  @ApiResponse({ status: 200, description: 'DELETE 성공' })
  deleteTest(@Param('id') id: string) {
    return { message: 'DELETE 성공', id };
  }
}
