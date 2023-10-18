import { useState, useEffect } from "react"
import axios from 'axios'

const Users = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [post, setPost] = useState([])

    useEffect( () => {
        axios.get(url)
        .then((response) => setPost(response?.data))
    }, [])

    return (
        <>
            <h3 className="users--header">Users</h3>
            {post.map((item, i) => {
                return (
                    <div className="post" key={i}>
                        <p>{item?.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Users