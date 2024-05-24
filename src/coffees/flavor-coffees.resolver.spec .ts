import { Test, TestingModule } from '@nestjs/testing';
import { FlavorCoffeesResolver } from './flavor-coffees.resolver';

describe('FlavorCoffeeResolver', () => {
  let resolver: FlavorCoffeesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlavorCoffeesResolver],
    }).compile();

    resolver = module.get<FlavorCoffeesResolver>(FlavorCoffeesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
