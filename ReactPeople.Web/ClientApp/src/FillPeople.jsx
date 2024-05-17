import React from 'react';

class FillPeople extends React.Component {
    getAge = number => {
        if (number > 65) {
            return 'table-danger';
        }

        return '';
    }
    render() {
        if (this.props.people.length === 0) {
            return <h2>Nothing to display....</h2>;
        }
        return (

            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map(person => (
                            <tr className={this.getAge(person.age)}>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td >{person.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FillPeople;
