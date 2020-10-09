import { action, observable } from "mobx";
import { createContext } from "react";

class TestStore {
  @observable title = "Hai";
  @action changeTitle = () => {
    this.title = "Text changed at store";
    console.log(this.title);
  };
}

export default createContext(new TestStore());
