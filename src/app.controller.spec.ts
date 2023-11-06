import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to the meeting manager api 2023.1.0.alpha1"', () => {
      expect(appController.getHello()).toBe('Welcome to the meeting manager api 2023.1.0.alpha1');
    });
  });
});
