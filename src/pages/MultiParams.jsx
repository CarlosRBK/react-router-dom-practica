import React from "react";
import { useParams } from "react-router-dom";

const MultiParams = () => {
    let { id, color1, color2 } = useParams();
    return (
    <div style={{
            color: color1,
            backgroundColor: color2
        }}>
            <h1>{id}</h1>
    </div>
  )
}

export default MultiParams;