import { Module } from '@nestjs/common';
import { PhrasesImagesController } from './phrases-images.controller';
import { PhrasesImagesService } from './phrases-images.service';

@Module({
  controllers: [PhrasesImagesController],
  providers: [PhrasesImagesService]
})
export class PhrasesImagesModule {}
