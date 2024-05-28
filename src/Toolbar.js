import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CreateIcon from '@mui/icons-material/Create';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CheckIcon from '@mui/icons-material/Check';

const Toolbar = ({ onToolSelected }) => {
    return (
        <div className="flex justify-around p-2 bg-gray-100 border-b">
            <Tooltip title="Draw Signature" placement="top">
                <IconButton onClick={() => onToolSelected('draw')} className="text-blue-500 hover:text-blue-700">
                    <CreateIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Add Text" placement="top">
                <IconButton onClick={() => onToolSelected('text')} className="text-green-500 hover:text-green-700">
                    <TextFieldsIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Place Checkmark" placement="top">
                <IconButton onClick={() => onToolSelected('check')} className="text-red-500 hover:text-red-700">
                    <CheckIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default Toolbar;
