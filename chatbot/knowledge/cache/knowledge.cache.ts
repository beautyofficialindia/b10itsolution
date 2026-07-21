class KnowledgeCacheStore {
  private store: Map<string, unknown>;

  constructor() {
    this.store = new Map();
  }

  get(key: string): unknown {
    return this.store.get(key);
  }

  set(key: string, value: unknown) {
    this.store.set(key, value);
  }

  has(key: string) {
    return this.store.has(key);
  }

  clear() {
    this.store.clear();
  }
}

export const knowledgeCache = new KnowledgeCacheStore();
