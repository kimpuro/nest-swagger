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

@ApiTags('Test')
@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello 메시지 반환' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 Hello 메시지를 반환합니다.',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @ApiOperation({ summary: '테스트용 POST 엔드포인트' })
  @ApiBody({ schema: { example: { name: '홍길동' } } })
  @ApiResponse({ status: 201, description: 'POST 성공' })
  createTest(@Body() body: any) {
    return { message: 'POST 성공', data: body };
  }

  @Put(':id')
  @ApiOperation({ summary: '테스트용 PUT 엔드포인트' })
  @ApiParam({ name: 'id', required: true, description: '수정할 리소스의 ID' })
  @ApiBody({ schema: { example: { name: '수정된 이름' } } })
  @ApiResponse({ status: 200, description: 'PUT 성공' })
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
