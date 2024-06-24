// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import "./Bag.scss";





const Bag = () => {
    const frames = Array(15).fill({});
    console.log(frames);
    return (
        <div className="Container-bag">
            <div class="watermark">
                <h2>BAG</h2>
                <div className="frames-container">
                    {frames.map((frame, index) => (
                        <div key={index} className="frame">
                            Frame {index + 1}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Bag;
