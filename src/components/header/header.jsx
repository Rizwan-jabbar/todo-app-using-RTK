import { useSelector } from "react-redux"

function Header() {
    const loginUser = useSelector(state => state.users.loginUser)
    return (
        <>

        <header className="flex justify-between py-2 px-10 capitalize bg-sky-100">
            {/* here logo */}

            <div className="">
                <h4>to do app</h4>
            </div>

            
        {/* here user info */}

        <div className="">
            <h2>{loginUser?.name}</h2>
        </div>

        </header>

        </>
    )
}

export default Header