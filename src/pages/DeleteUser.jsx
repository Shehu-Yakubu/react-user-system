import { useState } from "react"
import api from '../api/api'

const DeleteUser = () => {
    const [state, setState] = useState(" ")

    const handleChange = (e) => {
        setState({
            id: e.target.value
        })
    }

    const handleDelete = async (evt) => {
        evt.preventDefault()

        const response = await api.delete(`users/${state.id}`)
        // console.log(response)
        console.log(response.data)
    }

    return (
        <>
            <h3>Delete User</h3>
            <div>
                <form onSubmit={handleDelete}>
                    <label>
                        User ID:
                        <input
                            type="number"
                            name="id"
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        </>
    )
}

export default DeleteUser