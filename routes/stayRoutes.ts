import express from 'express';
import { registerHouse, registerHotel, registerPension } from '../controllers/staysController/createStays';
import { displayHouse, displayHotel, displayPension } from '../controllers/staysController/displayStays';
import { updateHouse, updateHotel, updatePension } from '../controllers/staysController/updateStays'
import { oneHouse, oneHotel, onePension } from '../controllers/staysController/oneStay';
import { deleteHouse, deleteHotel, deletePension } from '../controllers/staysController/deleteStay';
import { houseValidationRules, hotelValidationRules, pensionValidationRules } from '../middlewares/staysValidation';
import { upload } from '../middlewares/upload';

// pension
const router = express.Router();
// house
router.route('/houses').post(upload.array('photo', 5), houseValidationRules, registerHouse).get(displayHouse);
router.route('/houses/:id').put(houseValidationRules, updateHouse).get(oneHouse).delete(deleteHouse)
// hotel
router.route('/hotel').post(hotelValidationRules, registerHotel).get(displayHotel)
router.route('/hotel/:id').put(hotelValidationRules,).get(oneHotel).delete(deleteHotel)
// pension
router.route('/pension').post(pensionValidationRules, registerPension).get(displayPension)
router.route('/pension/:id').put(pensionValidationRules).get(onePension).delete(deletePension)
export default router;
