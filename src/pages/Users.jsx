import { useState, useEffect } from "react"
import axios from 'axios'

const Users = () => {
    const [post, setPost] = useState([])

    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( (data) => {
            // console.log(data)
            setPost(data?.data)
        })
    }, [])

    return (
        <>
            <h3>Users</h3>
            {post.map( (item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Users