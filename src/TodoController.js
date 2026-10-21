export class TodoController {
  constructor(todoService, todoRenderer) {
    this.todoService = todoService;
    this.todoRenderer = todoRenderer;
  }

  start() {
    this.todoRenderer.render(this.todoService);
  }

  addTask(description, type) {
    const newId = type === 'urgent'
      ? this.todoService.addUrgentTask(description)
      : this.todoService.addTask(description);
    if (newId) {
      this.todoRenderer.render(this.todoService, newId);
    }
    return newId;
  }
}
