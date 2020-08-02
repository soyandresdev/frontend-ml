import { Router } from 'express';
import { getItems, getOne } from './item.controllers';

const router = Router();

// /api/items
router.route('/').get(getItems);

// /api/items/:id
router.route('/:id').get(getOne);

export default router;
