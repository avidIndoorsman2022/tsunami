import React from "react";
import "./WavesImage.css";
import Box from '@mui/material/Box';

function WavesImage(props) {
  const { className } = props;

  //<Box sx={{ maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 } }}>
  //       <div className={`waves-image ${className || ""}`}>


  return (
    <Box sx={{ position: 'relative', height: 66, objectFit: 'cover' }}>
      <img className="intersect" src="/img/intersect@1x.svg" alt="intersect@1x.svg" />
      <img className="intersect-1" src="/img/intersect-1@1x.svg" alt="intersect-1@1x.svg" />
      <img className="intersect-2" src="/img/intersect-2@1x.svg" alt="intersect-2@1x.svg" />
    </Box>
  );
}

export default WavesImage;
