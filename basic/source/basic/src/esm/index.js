require("./src/index.mjs");

class Demo {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log("Demo run:", this.name);
  }
}

const demo = new Demo("esm");
demo.run();
