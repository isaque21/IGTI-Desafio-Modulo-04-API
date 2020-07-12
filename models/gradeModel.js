import mongoose from "mongoose";

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("Valor negativo para nota não permitido");
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

gradeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
gradeSchema.set("toJSON", {
  virtuals: true,
});

const gradeModel = mongoose.model("student", gradeSchema, "student");

export { gradeModel };
