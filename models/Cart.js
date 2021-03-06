const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
    ref: "user",
  },
  meals: [
    {
      productId: {
        type: String,
        ref: "meal",
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1."],
        default: 1,
      },
      price: Number,
    },
  ],
  order_total: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = Cart = mongoose.model("cart", CartSchema);
