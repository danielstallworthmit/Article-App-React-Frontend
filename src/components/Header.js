import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    appName: state.common.appName
});

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </Link>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="login" className="nav-link">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    <a className="navbar-brand">
                        {this.props.appName.toLowerCase()}
                    </a>
                </div>
            </nav>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
}
  
  export default connect(mapStateToProps)(Header);