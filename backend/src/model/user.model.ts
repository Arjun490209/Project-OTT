import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    fullName: {
      required: true,
      unique: true,
      type: String,
      trim: true,
      lowercase: true,
    },
    email: {
      required: true,
      unique: true,
      type: String,
      trim: true,
    },
    mobile: {
      required: true,
      unique: true,
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password.toString(), 12);
});

const User = model("User", userSchema);
export default User;
