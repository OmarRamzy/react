import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: 'Omar Ramzy', age: "23" },
      { name: 'Hussam Ashraf', age: "22" },
      { name: 'ahmed El-hadidy', age: "24" }
    ],
    otherAttribue: 'Test'

  };


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

  deletePersonHandler= (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1) ;
    this.setState({persons:persons})

  }

  render() {

   let persons= null ; 
   
   if (this.state.showPersons){

    persons=(
       <div>
       {this.state.persons.map(person=> {
        return <Person name= {person.name}
       age= {person.age}
       click = {this.deletePersonHandler.bind(this, person.index)} />  

       })}
      
      </div> 
    );
   }


    return (
      <div className="Person">
        <h1 >Hii, I'm Omar Ramzy!</h1>
       <button className="btn btn-danger" onClick={this.togglePersonsHandler} >Show names</button>
        {persons}

      </div>
    );
  }
}

export default App;