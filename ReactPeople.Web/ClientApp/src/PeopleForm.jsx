import React from 'react';
class PeopleForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-6 offset-md-2'>

                    <input type='text'
                        value={this.props.firstName}
                        onChange={this.props.onFirstTextChange}
                        className='form-control'
                        placeholder='First Name' />
                </div>
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.lastName}
                        onChange={this.props.onLastTextChange}
                        className='form-control'
                        placeholder='Last Name' />
                </div>
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.age}
                        onChange={this.props.onAgeTextChange}
                        className='form-control'
                        placeholder='Age' />
                </div>


                <div className='col-md-1'>
                    <button className='btn btn-dark w-100' onClick={this.props.onAddClick}>Add</button>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-dark w-100' onClick={this.props.onClearClick}>Clear All</button>
                </div>

            </div>
        )
    }

}
export default PeopleForm;