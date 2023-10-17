import { useState, useEffect } from "react"
import axios from 'axios'

const ErrorHandling = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/obmm`)
        .then( (response) => {
            setUsers(response.data)
        })
        .catch( (error) => {
            setError(error)
        })
    }, [])

    if (error) return `Error: ${error?.message}`
    if (!users) return "No user!"

    return (
        <>
            <h3>Error Handling</h3>
            <div>
                Users
                {
                    users.map( (item, i) => {
                        return (
                            <div key={i}>
                                <p>{item?.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ErrorHandling