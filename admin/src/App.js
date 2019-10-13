import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div class="container">
        <form>
          <div class="form-group">
            <label for="id-input">ID</label>
            <input type="number" class="form-control" id="id-input" placeholder="Enter ID"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Lat</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Lon</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;