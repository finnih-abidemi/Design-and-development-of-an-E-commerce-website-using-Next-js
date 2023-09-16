const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
    },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    orderHistory: [
      {
        orderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
        date: Date,
        status: String,
      },
    ],
    cartItems: [
      {
        productId: {
          type: String,
          ref: "Product", // Replace "Product" with the actual model name for products
        },
        imagePath: String,
        name: String,
        price: Number,
        stars: Number,
        // quantity: {
        //   type: Number,
        //   default: 1, // You can set a default quantity if needed
        // },
      },
    ],
  },
  { timestamps: true }
);

const UserProfile = mongoose.models.UserProfile || mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
