class Vehicle {
  private drive(): void {
    console.log("hey");
  }
}

// modifier => public(default), private, protected
// public => this method can be called anywhere anytime
// private => this method can be called only from inside of class
// protected => this method can be called from inside of class or children
// you can't change parent's modifier in child

class Vehicle2 {
  constructor(public /*or private or protected */ color: string) {}
}

class Car extends Vehicle2 {
  constructor(
    public wheels: number,
    color: string /* modifier not added because this color doesnt belong to parent */
  ) {
    super(color);
  }
}

const car = new Car(4, "red");

// Where to use classes
/*
 * interface + classes = strong code reuse
 */
