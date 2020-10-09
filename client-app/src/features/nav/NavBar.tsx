import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item exact header as={NavLink} to="/">
          <img
            src="/assets/logo.png"
            style={{ marginRight: "10px" }}
            alt="logo"
          ></img>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" header as={NavLink} to="/activities" />
        <Menu.Item header as={NavLink} to="/createActivity">
          <Button positive content="Create Activity"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
