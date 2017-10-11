import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import agent from '../agent';

const LoggedOutView = props => {
    if (!props.currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to='/' className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="login" className="nav-link">
                        Sign In
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="register" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
}

const LoggedInView = props => {
    if (props.currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to='/' className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="editor" className="nav-link">
                        <i className="ion-compose"></i>&nbsp;New Post
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="settings" className="nav-link">
                        <i className="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                            to={`@${props.currentUser.username}`}
                            className="nav-link">
                        <img src={props.currentUser.image} className="user-pic" alt="user-pic" />
                        {props.currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
}

const mapStateToProps = state => ({
    appName: state.common.appName,
    redirectTo: state.common.redirectTo,
    currentUser: state.common.currentUser
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
                    <LoggedInView currentUser={this.props.currentUser} />
                    <LoggedOutView currentUser={this.props.currentUser} />
                </div>
            </nav>
        );
    }
}

Header.contextTypes = {
    router: PropTypes.object.isRequired
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);