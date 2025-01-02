import React from 'react';

function Form() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [age, setAge] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (age <= 0) {
            console.log("Invalid age");
        } else {
            console.log(name);
            console.log(email);
            console.log(age);
        }
    }

    return (
        <div>
            <h2>Name</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h2>Email</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h2>Age</h2>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form
