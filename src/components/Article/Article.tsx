import classes from '*.module.css';
import { withStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { SectionsSlice } from '../../store/sectionsSlice';
import { styles } from './ArticleStyles';
import Section from './Section';

type ArticleProps = {
    resId: string,
    classes: any;
}

const Article = ({ resId, classes }: ArticleProps) => {
    const resources = useSelector((state: RootState) => state.resources);
    const sections = useSelector((state: SectionsSlice) => state.sections)
    const data = sections['Turn on the System']

return (
    <div>
        <Section section={data}></Section>
    </div>
    
);}




export default withStyles(styles)(Article);