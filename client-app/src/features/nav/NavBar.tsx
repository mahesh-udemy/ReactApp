import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProps {
  createActivityForm: () => void;
}

const NavBar: React.FC<IProps> = ({ createActivityForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="assets/logo.png"
            style={{ marginRight: "10px" }}
            alt="logo"
          ></img>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={() => createActivityForm()}
            positive
            content="Create Activity"
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
