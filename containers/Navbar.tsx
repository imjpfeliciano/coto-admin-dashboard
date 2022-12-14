import styled from "styled-components";
import { Button, IconButton } from "../components/Button";
import {
  Navigation,
  NavigationBrandContainer,
  NavigationProfileContainer,
} from "../components/Navigation";

const Navbar = () => {
  return (
    <Navigation>
      <NavigationBrandContainer>Coto Dashboard v1.0</NavigationBrandContainer>
      <NavigationProfileContainer>
        <IconButton
          icon="account_circle"
          label="Jhon Doe"
          onClick={() => {}}
          withCaret
        />
        <IconButton icon="notifications" onClick={() => {}} />
      </NavigationProfileContainer>
    </Navigation>
  );
};

export default Navbar;
