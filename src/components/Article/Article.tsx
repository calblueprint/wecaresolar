import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { isArticle } from '../../store/resourcesSlice';
import ProgressBar from '../Guides/ProgressBar';
import { styles } from './ArticleStyles';
import SectionCard from './Section';

type ArticleProps = {
  resId: string;
  classes: any;
};

const Article = ({ resId, classes }: ArticleProps): typeof Article => {
  const resources = useSelector((state: RootState) => state.resources);
  const article = resources[resId];
  const sections = useSelector((state: RootState) => state.sections);
  const calcProgress = () => {
    return 25;
  };

  if (isArticle(article.data)) {
    const articleSections = article.data.sections;
    return (
      <div>
        <div className={classes.title}>
          <Typography variant="h1">{article.title}</Typography>
        </div>
        <div className={classes.progressBar}>
          {ProgressBar(calcProgress())}
          <Typography variant="body2" className={classes.progressText}>
            % Complete
          </Typography>
        </div>
        <div className={classes.sectionView}>
          {articleSections.map((key: any) => (
            <div className={classes.section}>
              <SectionCard section={sections[key]}></SectionCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Article);
