import React from 'react';
import DomainPath from '../buildFiles/DomainPath.js';

function removeSlashes(value) {
  return value.replace(/\//g, '');
}

const NavLink = React.createClass({
  render() {
    this.getClassName();

    return <a href={this.getHref()} className={this.getClassName()} onClick={this.onClick}>{this.props.children}</a>;
  },
  getHref() {
    return DomainPath.origin + '/' + this.props.to;
  },
  getClassName() {
    const pathname = removeSlashes(window.location.pathname);
    const to = removeSlashes(this.getHref());

    if(to === pathname) {
      return 'active';
    }

    return '';
  },
  onClick(e){
    if(e.target.className === 'active'){
      e.stopPropagation();
      e.preventDefault();
    }
  }
});

export default NavLink;
