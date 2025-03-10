import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for the common properties
interface IProperty extends Document {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
    address: string;
    price: number;
    description: string;
    type: 'house' | 'hotel' | 'pension'; // Discriminator key
    photos?: string[]
    customerRating?: number; // Added customerRating
    contact?: {
        phone?: string
        email?: string
        website?: string
    }
}

// Base schema (common fields)
const PropertySchema = new Schema<IProperty>(
    {
        name: { type: String, required: true },
        location: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
        },
        address: { type: String, required: true }, // Example: "Addis Ababa, 4 Kilo"
        price: { type: Number, required: true },
        description: { type: String, required: true },
        type: { type: String, required: true, enum: ['house', 'hotel', 'pension'] }, // Discriminator key
        photos: [String],
        customerRating: { type: Number, min: 1, max: 5, default: 0 },
        contact: {
            phone: { type: String },
            email: { type: String },
            website: { type: String },
        },
    },
    { discriminatorKey: 'type', timestamps: true }
);

// Create a base model
const Property = mongoose.model<IProperty>('Property', PropertySchema);

export { Property, IProperty };
