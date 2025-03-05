import { Request, Response } from 'express';
import { House } from '../../models/house.schema';
import { Hotel } from '../../models/hotel.schema';
import { Pension } from '../../models/pension.schema';
export const deleteHouse = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const house = await House.findById(id);
    if (!house) {
        return res.status(404).json({ message: 'house not found' });
    }
    await House.findByIdAndDelete(id);

    return res.status(200).json({ message: 'House deleted successfully' });
};
export const deleteHotel = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const hotel = await Hotel.findById(id);
    if (!hotel) {
        return res.status(404).json({ message: 'house not found' });
    }
    await Hotel.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Hotel deleted successfully' });
};
export const deletePension = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter
    // Find the existing pension by ID
    const pension = await Pension.findById(id);
    if (!pension) {
        return res.status(404).json({ message: 'pension not found' });
    }
    await Pension.findByIdAndDelete(id);

    return res.status(200).json({ message: 'pension deleted successfully' });
};