import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesByFlavorLoader } from './coffees-by-flavor.loader';

describe('CoffeesByFlavorLoader', () => {
  let provider: CoffeesByFlavorLoader;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeesByFlavorLoader],
    }).compile();

    provider = module.get<CoffeesByFlavorLoader>(CoffeesByFlavorLoader);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
