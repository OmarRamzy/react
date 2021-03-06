import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: 'Omar Ramzy', age: "23" },
      { name: 'Hussam Ashraf', age: "22" },
      { name: 'ahmed El-hadidy', age: "24" }
    ],
    otherAttribue: 'Test'

  };

  switchNameHandler = (newName) => {
    //console.log("was clicked!");
    this.setState({
      persons: [
        { name: 'Omar Adel Ramzy', age: "23" },
        { name: 'Hussam Ashraf', age: "25" },
        { name: newName, age: "24" }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Omar Adel Ramzy', age: "23" },
        { name: event.target.value, age: "25" },
        { name: 'Ahmed ElHadidy', age: "24" }
      ],
      showPersons: false

    });
  }

  togglePersonsHandler = () => {
    const doseShow = this.state.showPersons ;
    this.setState({showPersons: !doseShow}) ;
  }

  // <button className="btn btn-danger" onClick={this.switchNameHandler.bind(this , 'Ahmed')} >Switch names</button>
  /*
 <Person
        click={this.switchNameHandler}
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} ></Person>
      <Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler} />
      <Person name={this.state.persons[2].name}
        age={this.state.persons[2].age} ></Person>

  */
  render() {

   let persons= null ; 
   
   if (this.state.showPersons){

    persons=(
       <div>
       {this.state.persons.map(person=>{
        return <Person name= {person.name}
       age= {person.age} />  

       })}
      }
      </div> 
    );
   }


    return (
      <div className="Person">
        <h1 >Hii, I'm Omar Ramzy!</h1>
       <button className="btn btn-danger" onClick={this.togglePersonsHandler} >Switch names</button>
        {persons}

      </div>
    );
  }
}

export default App;
