// import React, { useEffect, useRef, useState } from "react";

// function Home() {
//   const [data, setdata] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   },[data]);
//   const handler = (e) => {
//     setdata(e.target.value);
//   };
//   return (
//     <div>
//       <center>
//         <form>
//           <input
//             type="text"
//             placeholder="username"
//             name="username"
//             value={data}
//             onChange={handler}
//           /><br/>
//           {data}
//           <br/>
//           {count.current}
//         </form>
//       </center>
//     </div>
//   );
// }

// export default Home;
import React from 'react'

function Home() {
  return (
    <div class="container">
  <div class="row">
    <div class="col-ms-4 text-primary bg-danger">Column1</div>
    <div class="col-ms-3 text-danger bg-primary">Column 2</div>
    <div class="col-ms-3 text-white bg-danger">Column 3</div>
  </div>
</div>

  )
}

export default Home
