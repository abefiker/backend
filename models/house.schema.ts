import { Schema } from "mongoose";
import { IProperty, Property } from "./base.schema";
interface IHouse extends IProperty {
    bedrooms: number;
    hasBalcony?: boolean;
}

const HouseSchema = new Schema<IHouse>({
    bedrooms: { type: Number, required: true },
    hasBalcony: { type: Boolean, default: false },
});


// Create a discriminator model for houses
const House = Property.discriminator<IHouse>('House', HouseSchema);

export { House, IHouse };
