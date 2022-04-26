import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhrasesImagesModule } from './phrases-images/phrases-images.module';

@Module({
  imports: [PhrasesImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
