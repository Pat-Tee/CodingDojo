import React from 'react';

/////////////////////
// Big Inversion
/////////////////////

const PersonCard2 = person => {

    console.log(person);

    return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Name: {person.firstName} {person.lastName}</h4>
                    <p className="card-text">Age: {person.age}</p>
                    <p className="card-text">Hair color: {person.hairColor}</p>
                </div>
            </div>
    )
}

export default PersonCard2;