import Task from "../models/task.model.js";

export const gettasks = async (req, res) => {
  try {
    const task = await Task.find({ user: req.user.id }).populate("user");
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createtask = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const newtask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const tasksave = await newtask.save();
    res.json(tasksave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const gettask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletetask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "task not found" });
    return res.sendStatus(204);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatetask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
