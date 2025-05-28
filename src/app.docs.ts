import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function GetUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: '테스트용 PUT 엔드포인트' }),
    ApiParam({ name: 'id', required: true, description: '수정할 리소스의 ID' }),
    ApiBody({ schema: { example: { name: '수정된 이름' } } }),
    ApiResponse({ status: 200, description: 'PUT 성공' }),
  );
}

export function GetAllDocs() {
  return applyDecorators(
    ApiOperation({ summary: '테스트용 GET 엔드포인트' }),
    ApiResponse({ status: 200, description: 'GET 성공' }),
    ApiResponse({ status: 200, description: 'GET 성공1' }),
    ApiResponse({ status: 200, description: 'GET 성공1 <br> GET 성공2 ' }),
  );
}
export function CreateTestDocs() {
  return applyDecorators(
    ApiOperation({ summary: '테스트용 POST 엔드포인트' }),
    ApiBody({ schema: { example: { name: '새 이름' } } }),
    ApiResponse({ status: 201, description: 'POST 성공' }),
  );
}

export function DeleteTestDocs() {
  return applyDecorators(
    ApiOperation({ summary: '테스트용 DELETE 엔드포인트' }),
    ApiParam({ name: 'id', required: true, description: '삭제할 리소스의 ID' }),
    ApiResponse({ status: 200, description: 'DELETE 성공' }),
  );
}
