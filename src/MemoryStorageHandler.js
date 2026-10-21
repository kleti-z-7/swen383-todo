export class MemoryStorageHandler {
  constructor() {
    this.tasks = [];
  }

  load() {
    return [...this.tasks];
  }

  save(tasks) {
    this.tasks = [...tasks];
  }
}
