'use strict';
/*! (c) Andrea Giammarchi */

let batches = null;
const batch = fn => {
  const prev = batches;
  batches = new Set;
  try {
    fn();
    for (const fn of batches)
      prev ? prev.add(fn) : fn();
  }
  finally { batches = prev; }
};
exports.batch = batch;

let effects = null;
const effect = fn => {
  const prev = effects;
  effects = fn;
  try { fn(); }
  finally { effects = prev; }
};
exports.effect = effect;

class Signal {
  constructor(_) {
    this._ = _;
  }
}
exports.Signal = Signal

class Computed extends Signal {
  get value() {
    return this._();
  }
  set value(_) {
    throw new Error('computed are read-only');
  }
  toString() { return this._() }
  valueOf() { return this._() }
}

const computed = value => new Computed(value);
exports.computed = computed;

class Reactive extends Signal {
  constructor(_) {
    super(_).$ = new Set;
  }
  get value() {
    if (effects)
      this.$.add(effects);
    return this._;
  }
  set value(_) {
    if (this._ !== _) {
      this._ = _;
      for (const fn of this.$)
        batches ? batches.add(fn) : fn();
    }
  }
  peek() { return this._ }
  toString() { return this._ }
  valueOf() { return this._ }
}

const signal = value => new Reactive(value);
exports.signal = signal;
