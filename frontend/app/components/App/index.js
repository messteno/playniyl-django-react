import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const App = ({ children }) => (
    <div className="app">
        <Navbar className="appnav" inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Playvinyl</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav className="appnav__list">
                    <NavItem eventKey={1} className="appnav__item" href="#">
                        <i className="fa fa-dot-circle-o fa-2x" />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {children}
    </div>
);

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;
