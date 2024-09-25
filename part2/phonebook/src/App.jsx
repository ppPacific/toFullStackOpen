import { useState } from 'react'
import Filter from "./components/Filter.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas',phone:'040123456' }
    ])
    const [newName, setNewName] = useState('');
    const [newNos, setNos] = useState('');
    const [searched, setSearched] = useState('');
    const addName = (event) => {
        event.preventDefault()
        if(persons.find((item)=>item.name===newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons([...persons, {name:newName,phone: newNos}])
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <p>filter shown with</p>
                <Filter searched={searched} setSearched={setSearched}/>

            </div>
            <form onSubmit={addName}>
                <h2>add a new</h2>
                <div>
                    name: <input
                    type={"text"}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}/>
                    <div>number: <input type={"text"}
                                        value={newNos}
                                        onChange={(e) => setNos(e.target.value)}/></div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.filter((item)=>item.name.replace(/\s+/g, '').toLowerCase().includes(searched.toLowerCase())).map((p,index)=>{
                return <p key={`p-${index}`}>{p.name} {p.phone}</p>
            })}
        </div>
    )
}

export default App
