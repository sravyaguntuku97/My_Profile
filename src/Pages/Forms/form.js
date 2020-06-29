import React, { Component } from "react";
import Classprops from "../props/Classprops.js";
let Details = [
  { id: 1, name: "name1", age: "21", role: "enginer" },
  { id: 2, name: "name2", age: "22", role: "Doctor" },
];
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hi",
      age: "33",
      role: "test",
      Details: Details,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const count = this.state.Details.length + 1;
    const formValues = {
      id: count,
      name: this.state.name,
      age: this.state.age,
      role: this.state.role,
    };
    console.log(formValues);
    // const array = this.state.Details.concat(formValues)
    // console.log(array)
    this.setState({
      Details: this.state.Details.concat(formValues),
    });
  };

  render() {
    const { name, age, role } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="age"
            value={age}
            onChange={this.handleChange}
          />

          <input
            type="role"
            name="role"
            value={role}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>

        {/* <div>
        <Classprops name={name} age={age} role={role}/>
        </div> */}
        <div>
          {this.state.Details.reverse().map((el, i) => {
            return (
              <div key={el.i}>
                <Classprops
                  details={this.state.Details}
                  id={el.id}
                  name={el.name}
                  age={el.age}
                  role={el.role}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
