import { useState } from "react"
import axios from 'axios'

const UpdateUser = () => {
    const [state, setState] = useState({
        Name: "",
        userName: ""
    })

    const handleChange = (evt) => {
        const value = evt.target.value

        setState({
            ...state,
            [evt.target.name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        // console.log(e)
        console.log(state)

        axios.put(`https://jsonplaceholder.typicode.com/users/1`, { state })
        .then( (res) => {
            // console.log(res)
            console.log(res.data)
        })
    }

    return (
        <>
            <h3>Update User</h3>
            <div>
                <form onSubmit={submitForm}>
                    <label>
                        User Name:
                        <input
                            type="text"
                            name="Name"
                            placeholder="name"
                            value={state.value}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="userName"
                            placeholder="username"
                            value={state.userName}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateUser