import { Body, Controller, Post } from '@nestjs/common';
import { ImageDto } from 'src/dto/image.dto';
import { PhrasesImagesService } from './phrases-images.service';

@Controller('phrases-images')
export class PhrasesImagesController {
    constructor(private phrasesService: PhrasesImagesService) {}

    @Post('generate-image')
    generateImage(@Body() imageDto?: ImageDto): string {
        console.log(imageDto);
        return this.phrasesService.generateImage(imageDto);
    }
}
