import React, {useState} from 'react';


const PersonForm = () => {

    const [formInfo, setFormInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [listOfPersons, setListOfPersons] = useState([]);

    const changeHandler = (e) => {
        console.log("you've changed an input", e.target.name, e.target.value);
        setFormInfo({
            ...formInfo,
            [e.target.name]: [e.target.value]
        })
    }

    const addPerson = (e) => {
        e.preventDefault();
        console.log("form submitted");
        console.log(formInfo);
        setListOfPersons([...listOfPersons, formInfo]);
    }

    return ( <div>
        <form onSubmit= { (e)=>addPerson(e) }>
            <div className="form-group">
                <label htmlFor="">First name:</label>
                <input onChange= { (e)=>changeHandler(e) } type="text" name="firstName" id="firstName" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Last name:</label>
                <input onChange= { (e)=>changeHandler(e) } type="text" name="lastName" id="lastName" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input onChange= { (e)=>changeHandler(e) } type="email" name="email" id="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password:</label>
                <input onChange= { (e)=>changeHandler(e) } type="password" name="password" id="password" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm password:</label>
                <input onChange= { (e)=>changeHandler(e) } type="password" name="confirmPassword" id="confirmPassword" className="form-control"/>
            </div>
            <input type="submit" value="Add" className="btn btn-success mt-3"/>
        </form>
        <hr />
        
            <div className="card">
                <div className="card-body">
                    <h4 onChange={changeHandler} className="card-title">{formInfo.firstName} {formInfo.lastName}</h4>
                    <p onChange={changeHandler} className="card-text">{formInfo.email}</p>
                    <p onChange={changeHandler} className="card-text">{formInfo.password}</p>
                    <p onChange={changeHandler} className="card-text">{formInfo.confirmPassword}</p>
                </div>
            </div> 
{/* 
        { listOfPersons.map((person,i) =>{ 
            return <div style = {{backgroundColor : "blue"}} className="card">
                <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card"/>
                <div className="card-body">
                    <h4 className="card-title">{person.firstName} {person.lastName}</h4>
                    <p className="card-text"> </p>
                </div>
            </div>  }) } */}
        </div> )
}


export default PersonForm