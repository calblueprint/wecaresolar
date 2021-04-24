import { Typography, withStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
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
  const article = useSelector((state: RootState) => state.resources[resId]);
  const sections = useSelector((state: RootState) => state.sections);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Attempt to cache the article
  }, []);

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
              <SectionCard section={sections[key]} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Article);
