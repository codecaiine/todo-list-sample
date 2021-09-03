/* eslint-disable import/no-cycle */

import showTasks from './index.js';
import { saveStorage } from './storage.js';

const editTask = (text, tasks, task) => {
  const taskIndex = task.index;
  const taskToEdit = tasks[taskIndex - 1];

  taskToEdit.description = text.textContent;
  saveStorage(tasks);
  showTasks();
};

export default editTask;