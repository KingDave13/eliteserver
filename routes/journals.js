import express from 'express';
import { getJournals } from '../controllers/journals.js';

const router = express.Router();

router.get('/', getJournals);

export default router;