import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    rbc: Number,
    wbc: Number,
    platelets: Number,
    hemoglobin: Number,
    weight: String,
    height: String,
    name: String,
    age: Number,
    gender: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", TestSchema);
export default Test;
