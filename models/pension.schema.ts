import { Schema } from "mongoose";
import { IProperty, Property } from "./base.schema";
interface IPension extends IProperty {
    hasParking?: boolean;
    petFriendly?: boolean;
}

const PensionSchema = new Schema<IPension>({
    hasParking: { type: Boolean, default: false },
    petFriendly: { type: Boolean, default: false },
});

// Create a discriminator model for pensions (motels)
const Pension = Property.discriminator<IPension>('Pension', PensionSchema);

export { Pension, IPension };
