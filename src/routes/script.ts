import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/ping', PageController.ping);

// ! Only use once.
router.post('/addAllCharacters', PageController.addAllCharacters);

export default router;