import { Component } from 'react';
// import {
// Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Container
// } from 'reactstrap';

class AppNavbar extends Component {
	state = {
		isOpen: false
	}
	toogle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
}

export default AppNavbar;