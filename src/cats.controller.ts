import { Controller, Get, Post, Req, Query, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request, @Query() key?: string): string {
    // console.log(request);
    console.log(key);
    return 'This action returns all cats';
  }

  //   @Get()
  //   findAll(): any {
  //     return {
  //       demo: 1,
  //       demo1: 'tt',
  //     };
  //   }
}
