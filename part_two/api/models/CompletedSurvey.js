const mongoose = require("mongoose");

const { Schema } = mongoose;

const CompletedSurveySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
      maxlength: 50,
    },
    questions: [
      {
        question: {
          type: String,
          required: true,
          maxlength: 50,
        },
        answer_string: {
          type: String,
          maxlength: 50,
        },
        answer_boolean: {
          type: Boolean,
        },
        answer_num: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

module.exports = mongoose.model("CompletedSurvey", CompletedSurveySchema);
