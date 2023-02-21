import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nama: "Ilham Maulana",
          age: "18",
          from:"Bandung",
          year: 2004
        };
      }

    render() {
      return (
        <div>
        <center><h1>SELAMAT DATANG DI KELAS {this.props.class}</h1></center>
        <div>
            <h1>BIODATA</h1>
            <li>nama = {this.state.nama}</li>
            <li>Age = {this.state.age}</li>
            <li>Year = {this.state.year}</li>
            <li>From = {this.state.from}</li>
          </div>
        </div>
      );
    }
  }

export default ClassComponent;