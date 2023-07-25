import { Schema, model } from "mongoose";

interface User {
  googleId: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

const UserSchema = new Schema<User>({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

export default model<User>("User", UserSchema);
