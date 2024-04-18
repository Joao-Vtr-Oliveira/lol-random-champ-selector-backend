import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as lolController from '../controllers/lolController';
import * as valorantController from '../controllers/valorantController';

const router = Router();

router.get('/ping', PageController.ping);

// ! Only use once.
router.post('/addAllCharacters', lolController.addAllCharacters);

// Route that returns a random champ with the sent data
router.post('/getRandomChampion', lolController.getRandomChampion);

// Route that returns all champions
router.get('/getAllChampions', lolController.getAllChampions);

// Route that returns a SPECIF champion selected by name.
router.post('/getSpecificChampion', lolController.getSpecificChampion);

// Route that adds a new champion
router.post('/addNewChampion', lolController.addNewChampion);

// Route that deletes a champion
router.delete('/deleteChampion', lolController.deleteChampion);      

// Route that updates a champion
router.put('/updateChampion', lolController.updateChampion);

// Valorant routes. 

// ! Only use once.
router.post('/valorant/addAllAgents', valorantController.addAllAgents);

router.get('/valorant/getAllAgents', valorantController.getAllAgents);

router.get('/valorant/getRandomAgent', valorantController.getRandomAgent);

router.post('/valorant/addNewAgent', valorantController.addNewAgent);

export default router;