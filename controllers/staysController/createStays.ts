import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../../errors/request.validation.error';
import { House } from '../../models/house.schema';
import { Hotel } from '../../models/hotel.schema';
import { Pension } from '../../models/pension.schema';
export const registerHouse = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, bedrooms, hasBalcony, photos, customerRating, contact } = req.body;
        // Create house entry
        const house = new House({
            name,
            location,
            address,
            price,
            description,
            bedrooms,
            hasBalcony,
            photos,
            customerRating,
            contact
        });

        // Save to MongoDB
        await house.save();
        return res.status(201).send({ message: 'House registered successfully', house });

    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ errors: "Something went wrong" });
    }
};

export const registerHotel = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, bedrooms, stars, hasJacuzzi, photos, customerRating, contact } = req.body;
        const hotel = new Hotel({
            name,
            location,
            address,
            price,
            description,
            bedrooms,
            stars,
            hasJacuzzi,
            photos,
            customerRating,
            contact
        });

        // Saving to MongoDB
        await hotel.save();
        return res.status(201).send({ message: 'Hotel registered successfully', hotel });

    } catch (err: any) {
        // Log the error for debugging
        console.error(err);

        // Handle different types of errors and return appropriate responses
        if (err instanceof RequestValidationError) {
            return res.status(400).json({ errors: err.errors });
        }

        // Generic error response
        return res.status(500).json({ errors: "Something went wrong" });
    }
}
export const registerPension = async (req: Request, res: Response): Promise<any> => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const { name, location, address, price, description, hasParking, petFriendly, photos, customerRating, contact } = req.body;
        // Convert `photos` from JSON string (if sent as a string)
        let photoUrls: string[] = [];
        if (typeof photos === "string") {
            try {
                photoUrls = JSON.parse(photos); // Parse if sent as a JSON string
            } catch (error) {
                console.error("Invalid JSON format for photos:", error);
                return res.status(400).json({ error: "Invalid JSON format for photos." });
            }
        } else if (Array.isArray(photos)) {
            photoUrls = photos; // If it's already an array, use it directly
        }
        const hotel = new Pension({
            name,
            location,
            address,
            price,
            description,
            hasParking,
            petFriendly,
            photos,
            customerRating,
            contact
        });

        // Saving to MongoDB
        await hotel.save();
        return res.status(201).send({ message: 'Pension registered successfully', hotel });

    } catch (err: any) {
        // Log the error for debugging
        console.error(err);

        // Handle different types of errors and return appropriate responses
        if (err instanceof RequestValidationError) {
            return res.status(400).json({ errors: err.errors });
        }

        // Generic error response
        return res.status(500).json({ errors: "Something went wrong" });
    }
}