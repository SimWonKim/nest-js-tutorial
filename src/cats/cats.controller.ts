import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createCatDto : CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }



    // @Post()
    // async create(@Body() createCatDto : CreateCatDto) {
    //     return createCatDto;
    // }

    // @Get()
    // @HttpCode(200)
    // findCats(@Query('name') name) {
    //     return { name }
    // }

    // @Get()
    // findAll(@Req() request: Request): string {
    //     console.log(request);
    //     return 'This action returns all cats';
    // }

    // // @Get(':id')
    // // find(@Param('id') id) {
    // //     return id;
    // // }

    // @Get(':id')
    // @Bind(Param())
    // findOne(params) {
    //     return params.id;
    // }

    // // @Post()
    // // @HttpCode(201)
    // // createCats(@Body('name') name) {
    // //     return name;
    // // }



    // @Put()
    // @HttpCode(200)
    // updateCats(@Body('id') id, @Body('name') name) {
    //     return { id, name };
    // } 
}