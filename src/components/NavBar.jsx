import React from "react";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            YourRecipeCompanion
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Log out</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/newrecipe">Add Recipe</Navbar.Link>
          <Navbar.Link href="/recipes">All Recipes</Navbar.Link>
          <Navbar.Link href="/user/recipes">My Recipes</Navbar.Link>
          {/* <Navbar.Link href="/aboutus">About Us</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
