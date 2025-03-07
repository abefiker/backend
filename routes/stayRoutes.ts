import express from 'express';
import { registerHouse, registerHotel, registerPension } from '../controllers/staysController/createStays';
import { displayHouse, displayHotel, displayPension } from '../controllers/staysController/displayStays';
import { updateHouse, updateHotel, updatePension } from '../controllers/staysController/updateStays'
import { oneHouse, oneHotel, onePension } from '../controllers/staysController/oneStay';
import { deleteHouse, deleteHotel, deletePension } from '../controllers/staysController/deleteStay';
import { houseValidationRules, hotelValidationRules, pensionValidationRules } from '../middlewares/staysValidation';

const router = express.Router();
// house
router.route('/houses').post(houseValidationRules, registerHouse).get(displayHouse);
router.route('/houses/:id').put(houseValidationRules, updateHouse).get(oneHouse).delete(deleteHouse)
// hotel
router.route('/hotels').post(hotelValidationRules, registerHotel).get(displayHotel)
router.route('/hotels/:id').put(hotelValidationRules,).get(oneHotel).delete(deleteHotel)
// pension
router.route('/pensions').post(pensionValidationRules, registerPension).get(displayPension)
router.route('/pensions/:id').put(pensionValidationRules).get(onePension).delete(deletePension)
export default router;
