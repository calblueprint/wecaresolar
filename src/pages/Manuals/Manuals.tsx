import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers'; 
import StandardCard from '../../components/Cards/StandardCard'; 
import { Link } from 'react-router-dom';
import { FormControl, Select, MenuItem, Input } from '@material-ui/core';

function ManualList({match, classes}) {
    return (
        <div>
          <h1>Troubleshoot</h1>
        </div>
      );
    }
//     const resources = useSelector(resourcesSlice); 
//     const articles = Object.keys(resources).filter((id) => resources[id].type == 'Article'); 
//     return (

//     )
// }


export default ManualList;


