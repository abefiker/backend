import { Request, Response } from 'express';
import { Pension } from '../../models/pension.schema'; // Ensure to import the Pension model
import { House } from '../../models/house.schema';
import { Hotel } from '../../models/hotel.schema';

export const oneHouse = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const house = await House.findById(id);
    if (!house) {
        return res.status(404).json({ message: 'house not found' });
    }
    // Respond with the updated pension data
    return res.status(200).send(house);
};
export const oneHotel = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const hotel = await Hotel.findById(id);
    if (!hotel) {
        return res.status(404).json({ message: 'hotel not found' });
    }
    // Respond with the updated pension data
    return res.status(200).send(hotel);
};
export const onePension = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const pension = await Pension.findById(id);
    if (!pension) {
        return res.status(404).json({ message: 'pension not found' });
    }
    // Respond with the updated pension data
    return res.status(200).send(pension);
};