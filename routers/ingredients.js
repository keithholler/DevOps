const express = require("express");
const router = express.Router();
const Ingredients = require("./models/ingredients");

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredients.find({}, { images: 1, images: 0 });
    res.json(ingredients);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ingredients = await Ingredients.findById(req.params.id);
    res.json(ingredients);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const ingredients = new Ingredients({
    sku: req.body.sku,
    name: req.body.name,
    vendor_id: req.body.vendor_id,
    category: req.body.category,
    quality_requirements: [
      {
        receiving_temp_low: req.body.receiving_temp_low,
        receiving_temp_high: req.body.receiving_temp_high,
      },
    ],
    images: [
      {
        source_url: req.body.source_url,
        description: req.body.description,
      },
    ],
  });

  try {
    const response = await ingredients.save();
    res.json(response._id);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ingredients = await Ingredients.findByIdAndUpdate(req.params.id, {
      sku: req.body.sku,
      name: req.body.name,
      vendor_id: req.body.vendor_id,
      category: req.body.category,
      quality_requirements: [
        {
          receiving_temp_low: req.body.receiving_temp_low,
          receiving_temp_high: req.body.receiving_temp_high,
        },
      ],
      images: [
        {
          source_url: req.body.source_url,
          description: req.body.description,
        },
      ],
    });
    res.json(ingredients._id);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const ingredients = await Ingredients.findByIdAndRemove(req.params.id);
    res.json(ingredients._id);
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
