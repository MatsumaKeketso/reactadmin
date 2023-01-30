import { Slide, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const FilterComponent = (isOpen: any) => {
  return (
    <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
      <Typography>Sliding</Typography>
    </Slide>
  );
};

export default FilterComponent;
