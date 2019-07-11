import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {id:'asd', name: 'Max', age: 29},
            {id:'sdf', name: 'Manu', age: 28},
            {id:'dfg', name: 'Stephanie', age: 20}
        ],
        otherState: 'some other value',
        showPersons: false,
    }

    togglePersonsHandler = () => {
      this.setState({
        showPersons: !this.state.showPersons
      });
    }

    // find is a deafult js method, also findIndex on every element in array
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex((p) => {
        return p.id ===                                                       id;
      })

      // const person = this.state.persons[personIndex]; is bad because references
      const person = {
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value;
      const updatedPersons = [...this.state.persons];
      updatedPersons[personIndex] = person;

      this.setState({persons: updatedPersons});
    }

    //best to update state in a immutable fashion, create copy, the change
    //then update the state
    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      // slice copies the full array and returns a new one stored here.

      const persons = [...this.state.persons];
      // spread operator, reach out to state persons, speads out the elements inspect
      // in the array into a list of elements that get added to this array

      persons.splice(personIndex, 1); // removes 1 element from the array
      this.setState({persons: persons});
    }

  render() {
    let persons = null;
    let btnClass = 'Red';

    const style = {
        backgroundColor: 'rgb(63,153,54)',
        color: 'white',
        font: 'inherit',
        border: '1px solid grey',
        padding: '8px',
        cursor: 'pointer',

    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      // style.backgroundColor = 'rgb(190,0,0)';
      // style[':hover']= {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = null;
    }

    // let classes = ['red','bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');// classes =['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
  
    );
  }
}

export default App;
