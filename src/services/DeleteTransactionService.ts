import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transacitonRepository = getRepository(Transaction);

    const transactionExists = await transacitonRepository.findOne({
      where: { id },
    });

    if (!transactionExists) {
      throw new AppError('Transaction is not found', 401);
    }

    await transacitonRepository.delete(id);
  }
}

export default DeleteTransactionService;
