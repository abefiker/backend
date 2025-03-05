import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../../errors/request.validation.error';
import { House } from '../../models/house.schema';
import { Hotel } from '../../models/hotel.schema';
import { Pension } from '../../models/pension.schema';

export const displayHouse = async (req: Request, res: Response): Promise<any> => {
    const houses = await House.find({})
    res.status(200).send(houses)
}
export const displayHotel = async (req: Request, res: Response): Promise<any> => {
    const hotels = await Hotel.find({})
    res.status(200).send(hotels)
}
export const displayPension = async (req: Request, res: Response): Promise<any> => {
    const pensions = await Pension.find({})
    res.status(200).send(pensions)
}