/*when passing a value with function ---->*/ { this.switchNameHandler.bind(this , 'Value'); }
/*OR */  { ()=> this.switchNameHandler('Value') }

this.state.persons.map( p=>{
    return <Person name= {p.name}
   age= {p.age} />  
   })

/* To delete element */   
deletePersonHandler= (personIndex) =>{
    const persons = this.state.persons;
    persons.splice(personIndex, 1) ;
  }
   