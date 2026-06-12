import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },

    venueName: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    estimatedCost: {
      type: String,
      required: true,
    },

    whyItFits: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Event= mongoose.model("event",eventSchema);
export default Event;