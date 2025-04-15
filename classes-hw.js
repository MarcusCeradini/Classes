const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    //  - add(x, y): returns the sum of x and y
    //  - subtract(x, y): returns the result of x minus y
    // Then create an instance and call both methods.

    class Calculator {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      add(x, y){
        return(x + y)
      }
      subtract(x, y){
        return(x - y)
      }
    }
    let newcalc = new Calculator()
    log(`result: ${newcalc.add(43,34)}`)
    log(`result: ${newcalc.subtract(43,34)}`)
  },
  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    //  - setName(name): sets a property called name
    //  - getName(): returns the name
    // Then create an instance, set the name to your name, and log it using getName().

    class Person{
      setName(names){
        this.names = names
        return(names)
      }
      getName(){
        return(this.names)
      }
    }
    let person = new Person()
    person.setName("Marcus")
    log(`Set Name: ${person.setName("Marcus")}, Return Name: ${person.getName()}`)
  },
  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    // Then create one Bird and one Penguin, and call their fly() methods.

    class Bird{
      fly(){
        log("flying")
      }
    }
    class Penguin extends Bird {
      fly(){
        log("Penguins can't fly")
      }
    }

    lbird = new Bird().fly()
    lpenguin = new Penguin().fly()


  },
  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    // - Square's describe() method logs "I'm a square"
    // Then create instances of Circle and Square and call their describe() methods.

    class Shape{
      describe(){
        log("I'm a shape")
      }
    }
    class Circle{
      describe(){
        log("I'm a circle")
      }
    }
    class Square{
      describe(){
        log("I'm a square")
      }
    }
    const Circles = new Circle().describe()
    const Squares = new Square().describe()

    log(`${Circles.describe()}`)
    log(`${Squares.describe()}`)
  },
  function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    // Then create an instance of Manager, and call both methods.

    class Employee {
      work() {
        log("Working...")
      }
    }
    class Manager extends Employee {
      hireEmployee() {
        log("Employee hired")
      }
    }

    const boss = new Manager().work()
    const bossS = new Manager().hireEmployee()
  }
]

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
