import mongoose from "mongoose";

const calculateSchema = new mongoose.Schema(
  {
    num1: {
      type: Number,
      required: true,
    },
    num2: {
      type: Number,
      required: true,
    },
    operator: {
      type: String,
      required: true,
    },
    sumAnswer: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Calculate", calculateSchema);
