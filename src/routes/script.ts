import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/ping', PageController.ping);

// ! Only use once.
router.post('/addAllCharacters', PageController.addAllCharacters);


// TODO: A route that returns a random champion with the role, damage type and range info.
// ? { "role": { "$all": ["mid"] } } -> Query in MongoDB compass

router.post('/getChampion', PageController.getChampion)


export default router;