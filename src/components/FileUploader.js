import React from "react";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'


const FileUploader = () => {
  return (
    <>
      <Box
        sx={{
          width: '30vw',
          height: '35vh',
          padding: '5px',
          backgroundColor: '#6D6875',
          '&:hover': {
            backgroundColor: '#6D6875',
            opacity: [0.8],
          },
          opacity:'0.6',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Box>
          <FontAwesomeIcon 
            icon={faFileCirclePlus} 
            color='#FFCDB2' 
            size = '2x'
          />
          Upload Files
        </Box>
      </Box>
    </>
  );
}

export default FileUploader;