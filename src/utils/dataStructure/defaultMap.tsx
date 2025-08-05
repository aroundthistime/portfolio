export class DefaultMap<K, V> extends Map<K, V> {
  constructor(private readonly defaultFactory: () => V) {
    super();
  }

  get(key: K): V {
    if (!this.has(key)) {
      this.set(key, this.defaultFactory());
    }
    return super.get(key)!;
  }
}
