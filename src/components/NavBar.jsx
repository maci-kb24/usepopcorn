import PropTypes from 'prop-types'

function NavBar({ children }) {
    return <header className="header">{children}</header>;
  }
  

export default NavBar

NavBar.propTypes = {
    children: PropTypes.node,
}