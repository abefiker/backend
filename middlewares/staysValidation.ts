import { body } from 'express-validator';

export const houseValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location.latitude').isNumeric().withMessage('Latitude must be a number'),
  body('location.longitude').isNumeric().withMessage('Longitude must be a number'),
  body('address').notEmpty().withMessage('Address is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('description').notEmpty().withMessage('Description is required'),
  body('bedrooms').isInt({ min: 1 }).withMessage('Bedrooms must be at least 1'),
  body('hasBalcony').isBoolean().withMessage('hasBalcony must be true or false'),
];
export const hotelValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location.latitude').isNumeric().withMessage('Latitude must be a number'),
  body('location.longitude').isNumeric().withMessage('Longitude must be a number'),
  body('address').notEmpty().withMessage('Address is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('description').notEmpty().withMessage('Description is required'),
  body('bedrooms').isInt({ min: 1 }).withMessage('Bedrooms must be at least 1'),
  body('stars').isInt({ min: 1, max: 5 }).withMessage('Stars must be between 1 and 5'),
  body('hasJacuzzi').isBoolean().withMessage('hasJacuzzi must be true or false'),
]
export const pensionValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location.latitude').isNumeric().withMessage('Latitude must be a number'),
  body('location.longitude').isNumeric().withMessage('Longitude must be a number'),
  body('address').notEmpty().withMessage('Address is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('description').notEmpty().withMessage('Description is required'),
]