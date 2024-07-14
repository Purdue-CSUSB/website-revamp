import React from "react";
import { Stack } from "@mui/material";
import StickySideNav from "../StickySideNav";
import "../Research.css"

function urcssr() {

    return (
        <div>
            <Stack direction="row">
                <div className="side-content"> 
                    <StickySideNav /> 
                </div>
                <div className="main-content">
                    <h4> Undergraduate Research Computational Science Student Resources </h4>
                </div>

            </Stack>
        </div>

    );


}
export default urcssr;