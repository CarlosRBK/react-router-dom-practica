import React from "react";
import { useParams } from "react-router-dom";

const ParamsId = () => {
    let { id } = useParams();
    return (
    <div>
    <p>{id}</p>
    </div>
  )
}

export default 
ParamsId