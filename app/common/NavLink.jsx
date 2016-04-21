import React from 'react';
import {Link} from 'react-router';

const NavLink = React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active" onClick={this.onClick}>{this.props.children}</Link>;
  },
  onClick(e){
    if(e.target.className === 'active'){
      e.stopPropagation();
      e.preventDefault();
    }
  }
});

export default NavLink;