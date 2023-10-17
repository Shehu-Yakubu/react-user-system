import { useState } from "react"
import axios from 'axios'

const AddUser = () => {
    const [name, setName] = useState({
        name: " ",
    })

    const handleChange = (e) => {
        e.preventDefault()

        setName({
            name: e.target.value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        axios.put(`https://jsonplaceholder.typicode.com/users`, { name })
        .then( (res) => {
            // console.log(res)
            console.log(res.data)
        })
    }

    return (
        <>
            <h3>Add User</h3>
            <div>
                <form onSubmit={submitForm}>
                    <label>User Name:
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddUser