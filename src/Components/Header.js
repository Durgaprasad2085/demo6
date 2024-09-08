import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function Header() {
  return (
    <div>
      <DropdownButton
        direction="horizontal"
        gap={3}
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Light dropdown"
        className="mt-2"
        data-bs-theme="light"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Dark dropdown"
        className="mt-2"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>
      <p class="text-primary">This text is primary colored.</p>
<p class="text-secondary">This text is secondary colored.</p>
<p class="text-success">This text is success colored.</p>
<p class="text-danger">This text is danger colored.</p>
<p class="text-warning">This text is warning colored.</p>
<p class="text-info">This text is info colored.</p>
<p class="text-light bg-dark">This text is light colored on a dark background.</p>
<p class="text-dark">This text is dark colored.</p>
<p class="text-muted">This text is muted.</p>
<p class="text-white bg-primary">This text is white on a primary background.</p>
<div class="row">
  <div class="col-sm-12 col-md-6 col-lg-4 text-white bg-primary" >Column 1</div>
  <div class="col-sm-12 col-md-6 col-lg-4">Column 2</div>
  <div class="col-sm-12 col-md-6 col-lg-4">Column 3</div>
</div>
<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-secondary">Secondary Button</button>
<button type="button" class="btn btn-success">Success Button</button>


    </div>
  );
}

export default Header;
