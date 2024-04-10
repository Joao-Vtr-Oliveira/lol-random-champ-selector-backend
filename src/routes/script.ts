import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/ping', PageController.ping);

// ! Only use once.
router.post('/addAllCharacters', PageController.addAllCharacters);

// Route that returns a random champ with the sent data
router.post('/getChampion', PageController.getChampion)

// Route that returns all champions
router.get('/getAllChampions', PageController.getAllChampions)

// Route that adds a new champion
router.post('/addNewChampion', PageController.addNewChampion);

// Route that deletes a champion
router.delete('/deleteChampion', PageController.deleteChampion);

// Route that updates a champion
router.put('/updateChampion', PageController.updateChampion);

export default router;