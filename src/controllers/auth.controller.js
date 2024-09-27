import { createaccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const passwordhash = await bcrypt.hash(password, 10);

    const newuser = new User({
      username,
      email,
      password: passwordhash,
    });

    const usersave = await newuser.save();
    const token = await createaccessToken({ id: usersave.id });
    res.cookie("token", token);

    res.json({
      id: usersave.id,
      username: usersave.username,
      email: usersave.email,
      createdAt: usersave.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving user" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userfound = await User.findOne({ email: email });
    if (!userfound) return res.status(401).json({ message: "user not found" });

    const ismacht = await bcrypt.compare(password, userfound.password);
    if (!ismacht) return res.status(401).json({ message: "password incorrect" });

    const token = await createaccessToken({ id: userfound.id });
    res.cookie("token", token);

    res.json({
        id: userfound.id,
        username: userfound.username,
        email: userfound.email,
        createdAt: userfound.createdAt
    })
  } catch (error) {
    res.status(500).json({ message: "Error email o passsword" });
  }
};

export const logout = (req, res) => {
    res.cookie('token', " ", { expires: new Date(0)})
    res.sendStatus(200);
};

export const profile = async(req, res) => {
    const userfound = await User.findById(req.user.id);
    if(!userfound) return res.status(404).json({ message:'user not found'});
    res.json({
        id: userfound.id,
        username: userfound.username,
        email: userfound.email,
        updatedAt: userfound.updatedAt
    })
};
