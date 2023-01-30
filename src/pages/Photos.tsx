import { Typography, Stack } from "@mui/material";

import React, { useEffect, useState } from "react";
import { ListController } from "react-admin";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const PhotoGallery = (props: any) => {
  const { data = [] } = props;
  console.log(data);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography>Photo Gallery</Typography>
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
          borderRadius: 1,
        }}
        cols={3}
        rowHeight={164}
      >
        {data.map((item: any, i: number) => (
          <ImageListItem key={i}>
            <img
              src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

const Photos = (props: any) => {
  return (
    <ListController {...props}>
      {(cProps) => <PhotoGallery {...cProps} />}
    </ListController>
  );
};
export default Photos;
