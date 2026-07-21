/**
 * A generic, memory-only cache store for the Business Context Layer.
 * 
 * CRITICAL RULE: 
 * - Does NOT interact with localStorage, sessionStorage, or cookies.
 * - Entirely wiped upon page refresh.
 * - Is fully generic and NOT hardcoded to specific APIs.
 */
class BusinessCacheStore {
  private store = new Map<string, unknown>();

  public set(key: string, data: unknown): void {
    this.store.set(key, data);
  }

  public get<T>(key: string): T | null {
    return this.store.has(key) ? (this.store.get(key) as T) : null;
  }

  public has(key: string): boolean {
    return this.store.has(key);
  }

  public clear(): void {
    this.store.clear();
  }
}

export const businessCache = new BusinessCacheStore();
