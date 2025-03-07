import express from 'express';
import { registerHouse, registerHotel, registerPension } from '../controllers/staysController/createStays';
import { displayHouse, displayHotel, displayPension } from '../controllers/staysController/displayStays';
import { updateHouse, updateHotel, updatePension } from '../controllers/staysController/updateStays'
import { oneHouse, oneHotel, onePension } from '../controllers/staysController/oneStay';
import { deleteHouse, deleteHotel, deletePension } from '../controllers/staysController/deleteStay';


const router = express.Router();
// house
router.route('/houses').post(registerHouse).get(displayHouse);
router.route('/houses/:id').put(updateHouse).get(oneHouse).delete(deleteHouse)
// hotel
router.route('/hotels').post( registerHotel).get(displayHotel)
router.route('/hotels/:id').put(updateHotel).get(oneHotel).delete(deleteHotel)
// pension
router.route('/pensions').post( registerPension).get(displayPension)
router.route('/pensions/:id').put(updatePension).get(onePension).delete(deletePension)
export default router;
