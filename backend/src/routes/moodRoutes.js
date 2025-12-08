import express from 'express';
import { analyzeMood, getSolutions, getMoodEntries } from '../controllers/moodController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/analyze', protect, analyzeMood);
router.post('/solutions', protect, getSolutions);
router.get('/entries', protect, getMoodEntries);
export default router;