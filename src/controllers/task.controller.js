import Task from "../models/Task";

export const index = async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks);
  res.render("index", { tasks: tasks });
};

export const edit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (err) {
      console.log(err);
    }
}

export const update = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
}

export const add = async (req, res) => {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
}

export const deleted = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
}

export const done = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    console.log(task);
    res.redirect("/");
}
