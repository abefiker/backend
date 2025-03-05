
import { Schema } from "mongoose";
import { IProperty, Property } from "./base.schema";
interface IHotel extends IProperty {
    stars: number;
    hasJacuzzi?: boolean;
    bedrooms?:number
}

const HotelSchema = new Schema<IHotel>({
    stars: { type: Number, required: true, min: 1, max: 5 },
    hasJacuzzi: { type: Boolean, default: false },
    bedrooms: { type: Number,required: true}
});

// Create a discriminator model for hotels
const Hotel = Property.discriminator<IHotel>('Hotel', HotelSchema);

export { Hotel, IHotel };
