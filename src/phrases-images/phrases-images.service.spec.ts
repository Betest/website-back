import { Test, TestingModule } from '@nestjs/testing';
import { PhrasesImagesService } from './phrases-images.service';

describe('PhrasesImagesService', () => {
  let service: PhrasesImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhrasesImagesService],
    }).compile();

    service = module.get<PhrasesImagesService>(PhrasesImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
