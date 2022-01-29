import React, {Component} from 'react';

/////////////////////
// Prop It Up
/////////////////////
class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }

    increaseAge = () => {
        this.setState( {age: (this.state.age) + 1} );
    }

    render() {
        let { firstName, lastName, hairColor } = this.props;

    return (
        <>
            <h3>{lastName}, {firstName}</h3>
            <button onClick= { this.increaseAge } >Birthday!</button>
            <p>Age: {this.state.age}</p>
            <p>Hair color: {hairColor}</p>
        </>
        );
    }
    
}// end class

export default PersonCard;