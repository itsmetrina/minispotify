import { logout } from "../utils/auth"

const Logout = () => {
    return (
        <button type="button" onClick={logout} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
            Logout
        </button>
    )
}

export default Logout