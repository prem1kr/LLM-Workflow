import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: String,
    image: String,
    content: String,
    publishedAt: Date,

    source: {
      type: String,
      enum: ["original", "updated"],
      default: "original"
    },

    references: [String],

    updatedFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      default: null
    }
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);
