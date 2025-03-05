import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../../errors/request.validation.error';
import { Pension } from '../../models/pension.schema'; // Ensure to import the Pension model
import { House } from '../../models/house.schema';
import { Hotel } from '../../models/hotel.schema';
export const updateHouse = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, bedrooms, hasBalcony } = req.body;
        const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter

        // Find the existing pension by ID
        const house = await House.findById(id);
        if (!house) {
            return res.status(404).json({ message: 'house not found' });
        }

        // Update the pension fields with the new data
        house.name = name || house.name;
        house.location = location || house.location;
        house.address = address || house.address;
        house.price = price || house.price;
        house.description = description || house.description;
        house.bedrooms = bedrooms || house.bedrooms;
        house.hasBalcony = hasBalcony || house.hasBalcony;

        // Save the updated pension document
        await house.save();

        // Respond with the updated pension data
        return res.status(200).send({ message: 'House updated successfully', house });

    } catch (err: any) {
        // Log the error for debugging
        console.error(err);

        // Handle different types of errors and return appropriate responses
        if (err instanceof RequestValidationError) {
            return res.status(400).json({ errors: err.errors });
        }

        // Generic error response
        return res.status(500).json({ errors: 'Something went wrong' });
    }
};
export const updateHotel = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, bedrooms, hasJacuzzi, stars } = req.body;
        const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter

        // Find the existing pension by ID
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ message: 'house not found' });
        }

        // Update the pension fields with the new data
        hotel.name = name || hotel.name;
        hotel.location = location || hotel.location;
        hotel.address = address || hotel.address;
        hotel.price = price || hotel.price;
        hotel.description = description || hotel.description;
        hotel.bedrooms = bedrooms || hotel.bedrooms;
        hotel.stars = stars || hotel.stars;
        hotel.hasJacuzzi = hasJacuzzi || hotel.hasJacuzzi;

        // Save the updated pension document
        await hotel.save();

        // Respond with the updated pension data
        return res.status(200).send({ message: 'Hotel updated successfully', hotel });

    } catch (err: any) {
        // Log the error for debugging
        console.error(err);

        // Handle different types of errors and return appropriate responses
        if (err instanceof RequestValidationError) {
            return res.status(400).json({ errors: err.errors });
        }

        // Generic error response
        return res.status(500).json({ errors: 'Something went wrong' });
    }
};

export const updatePension = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, hasParking, petFriendly } = req.body;
        const { id } = req.params; // Assuming the Pension ID is passed as a URL parameter

        // Find the existing pension by ID
        const pension = await Pension.findById(id);
        if (!pension) {
            return res.status(404).json({ message: 'Pension not found' });
        }

        // Update the pension fields with the new data
        pension.name = name || pension.name;
        pension.location = location || pension.location;
        pension.address = address || pension.address;
        pension.price = price || pension.price;
        pension.description = description || pension.description;
        pension.hasParking = hasParking || pension.hasParking;
        pension.petFriendly = petFriendly || pension.petFriendly;
        // Save the updated pension document
        await pension.save();

        // Respond with the updated pension data
        return res.status(200).send({ message: 'Pension updated successfully', pension });

    } catch (err: any) {
        // Log the error for debugging
        console.error(err);

        // Handle different types of errors and return appropriate responses
        if (err instanceof RequestValidationError) {
            return res.status(400).json({ errors: err.errors });
        }

        // Generic error response
        return res.status(500).json({ errors: 'Something went wrong' });
    }
};
