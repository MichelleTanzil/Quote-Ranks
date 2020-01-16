const mongoose = require("mongoose");

var validatequoteLength = function(quote) {
  if (quote && quote.length !== "") {
    return quote.length >= 3;
  }
  return true;
};
var validateQuote = [
  {
    validator: validatequoteLength,
    message: "Quote must be at least 3 characters long."
  }
];

const QuoteSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "An author is required for this quote"],
      minlength: [3, "Author's name has a minimum length of 3 characters"]
    },
    quotes: [
      {
        quote: {
          type: String,
          validate: validateQuote
        },
        votes: {
          type: Number,
          default: 0
        }
      }
    ]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model("Quote", QuoteSchema);
