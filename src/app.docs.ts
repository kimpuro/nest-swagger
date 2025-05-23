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
