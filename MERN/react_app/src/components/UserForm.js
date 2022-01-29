import React, {useState} from 'react';


const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        addUser(newUser);
        console.log("Welcome", newUser);
    };

    const [formInfo, setFormInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const [listOfUsers, setListOfUsers] = useState([]);

    const changeHandler = (e) => {
        console.log("you've changed an input", e.target.name, e.target.value);
        setFormInfo({
            ...formInfo,
            [e.target.name]: [e.target.value]
        })
    }

    const addUser = (e) => {
        e.preventDefault();

        setListOfUsers([...listOfUsers, formInfo]);
    }

    return ( <div>
        <form onSubmit= { (e)=>createUser(e.target) }>
            <div className="form-group">
                <label htmlFor="">First name:</label>
                <input onChange= { (e)=>setFirstName(e.target.value) } type="text" name="firstName" id="firstName" className="form-control"/>
                {
                    firstName !== "" ?
                        firstName.length < 2 ?
                            <p style={{color:'red'}}>Must be at least 2 characters in length.</p>
                        : ""
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Last name:</label>
                <input onChange= { (e)=>setLastName(e.target.value) } type="text" name="lastName" id="lastName" className="form-control"/>
                {
                    lastName !== "" ?
                        lastName.length < 2 ?
                            <p style={{color:'red'}}>Must be at least 2 characters in length.</p>
                        : ""
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input onChange= { (e)=>setEmail(e.target.value) } type="email" name="email" id="email" className="form-control"/>
                {
                    email !== "" ?
                        email.length < 5 ?
                            <p style={{color:'red'}}>Must be at least 5 characters in length.</p>
                        : ""
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Password:</label>
                <input onChange= { (e)=>setPassword(e.target.value) } type="password" name="password" id="password" className="form-control"/>
                {
                    password !== "" ?
                        password.length < 8 ?
                            <p style={{color:'red'}}>Must be at least 8 characters in length.</p>
                        : ""
                    : ""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm password:</label>
                <input onChange= { (e)=>setConfirmPassword(e.target.value) } type="password" name="confirmPassword" id="confirmPassword" className="form-control"/>
                {
                    confirmPassword !== "" ?
                            confirmPassword !== password ?
                                <p style={{color:'red'}}>Must be the same as password.</p>
                            : ""
                    : ""
                }
            </div>
            <input type="submit" value="Add" className="btn btn-success mt-3"/>
        </form>
        <hr />
        
            <div className="card">
                <div className="card-body">
                    <h4 onChange={changeHandler} className="card-title">{firstName} {lastName}</h4>
                    <p onChange={changeHandler} className="card-text">{email}</p>
                    <p onChange={changeHandler} className="card-text">{password}</p>
                    <p onChange={changeHandler} className="card-text">{confirmPassword}</p>
                </div>
            </div> 

        </div> )
}


export default UserForm