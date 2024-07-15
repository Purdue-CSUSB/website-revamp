import React from "react";
import { Stack } from "@mui/material";
import "../Research.css"
import StickySideNav from "../StickySideNav";

function currProjects() {

    return (
        <div>
            <Stack direction="row">
                <div className="side-content">
                    <StickySideNav />
                </div>
                <div className="main-content">
                    <h4> Current Projects </h4>
                </div>
            </Stack>
        </div>

    );


}
export default currProjects;