import { LocalStorageHandler } from './LocalStorageHandler.js';
import { MemoryStorageHandler } from './MemoryStorageHandler.js';
import { TodoService } from './TodoService.js';

export class StorageFactory {
  constructor(kind = 'local') {
    this.kind = kind;
  }

  createStorage() {
    if (this.kind === 'memory') {
      return new MemoryStorageHandler();
    }
    return new LocalStorageHandler();
  }

  createService() {
    return new TodoService(this.createStorage());
  }
}
