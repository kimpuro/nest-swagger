import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export function GetUserDocs() {
  return applyDecorators(
    ApiOperation({ summary: '테스트용 PUT 엔드포인트' }),
    ApiParam({ name: 'id', required: true, description: '수정할 리소스의 ID' }),
    ApiBody({ schema: { example: { name: '수정된 이름' } } }),
    ApiResponse({
      status: 200,
      description: '성공/부분성공/경고 등 다양한 예시',
      examples: {
        success: {
          summary: '성공',
          value: {
            message: '성공',
            id: '123',
            data: { foo: 'bar' },
          },
        },
        partialSuccess: {
          summary: '부분 성공',
          value: {
            message: '부분 성공',
            id: '123',
            data: { foo: 'bar' },
            warning: '일부 데이터만 처리됨',
          },
        },
        warning: {
          summary: '경고',
          value: {
            message: '경고',
            warning: '문제가 발생함',
          },
        },
      },
    }),
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

// DTO 예시 (실제 DTO가 없으면 아래 임시 타입을 사용하세요)
class SuccessDto {
  message: string;
  id: string;
  data: any;
}
class PartialSuccessDto {
  message: string;
  id: string;
  data: any;
  warning: string;
}
class WarningDto {
  message: string;
  warning: string;
}
