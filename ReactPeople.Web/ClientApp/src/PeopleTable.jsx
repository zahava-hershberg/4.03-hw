import React from 'react';
import PeopleForm from './PeopleForm';
import FillPeople from './FillPeople';
class PeopleTable extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: "",
        people: [],
    }
    onFirstTextChange = n => {
        this.setState({ firstName: n.target.value });

    }
    onLastTextChange = n => {
        this.setState({ lastName: n.target.value });

    }
    onAgeTextChange = n => {
        this.setState({ age: n.target.value });

    }
    onClearClick = () => {
        this.setState({ firstName: '', lastName: '', age: '', people: [] });
    }
    onAddClick = () => {
        const newPerson = { firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age }
        const updatedPeople = [...this.state.people, newPerson];
        this.setState({ people: updatedPeople, firstName: '', lastName: '', age: '' });

    }
    render() {
        return (
            <div className='container-mt-5'>
                <PeopleForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onFirstTextChange={this.onFirstTextChange}
                    onLastTextChange={this.onLastTextChange}
                    onAgeTextChange={this.onAgeTextChange}
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick}
                />
                <FillPeople people={this.state.people} />



            </div>
        )
    }


}
export default PeopleTable;