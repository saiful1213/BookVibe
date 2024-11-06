import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isSmallDevie }) => {

    const links = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Listed Books', path: '/listedBooks' },
        { id: 3, name: 'Dashboard', path: '/dashboard' },
    ]

    return (
        <ul className={`flex ${isSmallDevie ? 'flex-col gap-4 mt-4 p-4 rounded-xl' : 'flex-row gap-10'} `}>
            {
                links.map(link => {
                    const { id, name, path } = link;
                    return (
                        <li className={`${isSmallDevie && 'border-b rounded-lg pb-2'}`} key={id}>
                            <NavLink to={path} className={({ isActive }) =>
                                isActive ? "border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg" : "text-muted-foreground hover:text-foreground"
                            }>
                                {name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

NavLinks.propTypes = {
    isSmallDevie: PropTypes.bool,
}

export default NavLinks;