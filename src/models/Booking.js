import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    email: { type: String, required: true },
    duration: { type: Number, required: true },
    location: {
      division: String,
      district: String,
      city: String,
      address: String,
    },
    totalCost: { type: Number, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", bookingSchema);
