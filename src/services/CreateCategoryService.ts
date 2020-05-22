// import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const createCategory = categoryRepository.create({ title });

    await categoryRepository.save(createCategory);

    return createCategory;
  }
}

export default CreateCategoryService;
