export class Person {
    constructor ({ name }) {
      this.name = name
      this.title = 'Person'
    }
  
    getName () {
      return this.name
    }
  }
  
  export class Apple {
    constructor ({ model }) {
      this.model = model
      this.title = 'APPLE'
    }
    getModel () {
      return this.model
    }
  }