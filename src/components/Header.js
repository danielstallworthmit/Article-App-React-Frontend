import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onRedirect: () => dispatch({type: 'REDIRECT'}),
    onLoad: (payload, token) => dispatch({type: 'APP_LOAD', payload, token})
})

class Header extends React.Component {
    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }
        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }
    componentWillUpdate(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);