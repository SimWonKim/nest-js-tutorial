import { Controller, Get, Post, Req, Param, Body, HttpCode, Put, Query, Bind } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Body() createCatDto : CreateCatDto) {
        return createCatDto;
    }

    @Get()
    @HttpCode(200)
    findCats(@Query('name') name) {
        return { name }
    }

    @Get()
    findAll(@Req() request: Request): string {
        console.log(request);
        return 'This action returns all cats';
    }

    // @Get(':id')
    // find(@Param('id') id) {
    //     return id;
    // }

    @Get(':id')
    @Bind(Param())
    findOne(params) {
        return params.id;
    }

    // @Post()
    // @HttpCode(201)
    // createCats(@Body('name') name) {
    //     return name;
    // }

  

    @Put()
    @HttpCode(200)
    updateCats(@Body('id') id, @Body('name') name) {
        return { id, name };
    } 
}