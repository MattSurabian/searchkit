import * as _ from "lodash"

export class State<T> {
  value: T
  defaultValue:T
  constructor(defaultValue: T = null) {
    this.defaultValue = defaultValue
    this.value = this.defaultValue
  }
  setValue(value: T) {
    this.value = value
    return this
  }
  clear(){
    this.value = this.defaultValue
  }
  getValue() {
    return this.value
  }
}

export class ArrayState extends State<Array<string|number>> {
  lazyInit() {
    this.value = this.value || []
    return this.value
  }
  toggle(val) {
    if (this.contains(val)) {
      this.remove(val)
    } else {
      this.add(val)
    }
  }
  clear(){
    this.value = []
  }
  remove(val) {
    this.value = _.without(this.lazyInit(), val)
  }
  add(val) {
    this.value = this.lazyInit().concat([val])
  }
  contains(val) {
    return _.contains(this.value, val)
  }
}

export class ObjectState extends State<Object>{
}

export class ValueState extends State<string|number>{
}
