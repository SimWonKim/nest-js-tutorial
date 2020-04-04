import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    HttpException,
    HttpStatus,
    ValidationPipe,
    UsePipes,
    Param,
    ParseIntPipe,
    UseGuards,
    SetMetadata,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cats.interface';
import { RolesGuard } from 'common/guard/roles.guard';
import { Roles } from 'common/decorator/role.decorator';

@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    @UsePipes(ValidationPipe)
    @Roles('admin')
    @HttpCode(201)
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    // @Get()
    // @HttpCode(200)
    // async findAll(): Promise<Cat[]> {
    //     return this.catsService.findAll();
    // }

    @Get(':id')
    @HttpCode(200)
    async findOne(@Param('id', new ParseIntPipe()) id) {
        return id;
        // throw new HttpException('Frobidden', HttpStatus.FORBIDDEN);
        // 예외처리를 생성하기 위해 인자 2개 필요(1. 메시지 2.응답코드)
        // throw new HttpException(
        //     {
        //         status: HttpStatus.FORBIDDEN,
        //         error: 'This is a custom message',
        //     },
        //     HttpStatus.FORBIDDEN,
        // );
        // 응답 메시지를 커스텀 할 수 있는 예외처리 방법.
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
