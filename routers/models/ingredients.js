const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
  sku: {
    type: String,
  },

  name: {
    type: String,
  },

  vendor_id: {
    type: String,
  },
  category: {
    type: String,
  },

  quality_requirements: [
    {
      receiving_temp_low: {
        type: Number,
      },

      receiving_temp_high: {
        type: Number,
      },
    },
  ],

  images: [
    {
      source_url: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Ingredients", ingredientsSchema);
