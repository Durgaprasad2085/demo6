// import React from "react";
// import { useContext } from "react";
// import { login } from "../App";
// function Footer() {
//   const array = useContext(login);
//   console.log(array);

//   return <div>Footer -${array}</div>;
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-primary bg-success ">Column1</div>
        <div className="col-md-4 text-success bg-primary">Column2</div>
        <div className="col-md-4 text-danger bg-dark">Column3</div>
        <div className="col-md-4 text-primary bg-success mt-4">Column4</div>
      </div>
    </div>
  );
}

export default Footer;
