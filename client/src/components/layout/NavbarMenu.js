import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { MenuItems } from "../../config/MenuItems";
import { Menu, MenuItem } from "@progress/kendo-react-layout";
class NavbarMenu extends Component {
  onSelect = event => {
    if(event.item.data.route!==undefined){
      this.props.history.push(event.item.data.route);
    }    
  };

  render() {
    let submenus = items => {
      if (items != null) {
        return items.map((item, index) => {
          return <MenuItem text={item.title} data={{ route: item.path }} key={index} />;
        });
      }
    };
    let menus = MenuItems.map((menuItem, index) => {
      return (
        <MenuItem
          text={menuItem.title}
          key={index}
          data={{}}
        >
          {submenus(menuItem.subMenu)}
        </MenuItem>
      );
    });

    return (
      <div className="gs1-color">
        <div className="container navbar navbar-expand-sm">
          <Menu onSelect={this.onSelect}>
            <MenuItem text='Home' data={{route: '/'}} key={999}/>
            {menus}
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarMenu);
