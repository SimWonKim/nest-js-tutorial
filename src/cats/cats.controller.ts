import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

    @Get()
    findAll(@Req() request : Request) : string {
        console.log(request);
        return 'This action returns all cats';
    }

    @Get(':id')
    find(@Param('id') id) {
        return id;
    }
}