import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" className="nav--home">Home</Link>
            <ul className="nav--list">
                <li className="nav--list--item">
                    <Link to="users">Users</Link>
                </li>
                <li className="nav--list--item">
                    <Link to="add">Add</Link>
                </li>
                <li className="nav--list--item">
                    <Link to="update">Update</Link>
                </li>
                <li className="nav--list--item">
                    <Link to="delete">Delete</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar