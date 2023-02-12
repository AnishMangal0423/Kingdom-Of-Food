import { useRouteError } from "react-router-dom";

function Error(){
  
    // we can also extract the error 
    let error=useRouteError();
    console.log(error);

    return(
        <>
        <h1>OOPS!!</h1>
      <h2>There is an error founded</h2>

      <h3>{error?.status +": Page "+ error?.statusText}</h3>
      </>
        )
}

export default Error;