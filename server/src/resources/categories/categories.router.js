import { Router } from 'express';
import { getcategories } from './categories.controller';

const router = Router();

// /api/categories/id
router.route('/:id').get(getcategories);

export default router;
