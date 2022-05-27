import { Schema, model } from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');
const roles = ["admin", "contributer", "sales"];
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: roles,
    default: "admin"
  }
}, {
  timestamps: true
},
);

UserSchema.statics = {
  roles
};

UserSchema.plugin(mongoosePaginate);
const User = model('user', UserSchema);
User._roles = roles
export default User;
