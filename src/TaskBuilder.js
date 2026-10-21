export class TaskBuilder {
  constructor(description) {
    this.task = {
      id: Date.now(),
      desc: description,
      completed: false,
      priority: 'normal',
      createdAt: new Date().toLocaleTimeString()
    };
  }

  urgent() {
    this.task.priority = 'high';
    this.task.desc = `[URGENT] ${this.task.desc}`;
    return this;
  }

  build() {
    return { ...this.task };
  }
}
