// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true },
// );

// //If the User collection does not exist create a new one.
// export default mongoose.models.User || mongoose.model("User", userSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    nid: {
      // নতুন ফিল্ড: NID No
      type: String,
      required: true,
      unique: true, // NID ইউনিক হওয়া ভালো
    },
    contact: {
      // নতুন ফিল্ড: Contact
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
