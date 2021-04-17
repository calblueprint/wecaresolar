import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { isArticle } from '../../store/resourcesSlice';
import { styles } from './ArticleStyles';
import Section from './Section';

type ArticleProps = {
  resId: string,
  classes: any;
}

const Article = ({ resId, classes }: ArticleProps): typeof Article => {
  const resources = useSelector((state: RootState) => state.resources)
  const article = resources[resId]
  const sections = useSelector((state: RootState) => state.sections)

  if (isArticle(article.data)) {
    const articleSections = article.data.sections
    return (
      <div>
        <div className={classes.title}>
          <Typography variant="h1">{article.title}</Typography>
        </div>
        <div className={classes.sectionView}>
          {Object.keys(articleSections).map((key: any) => (
            <div className={classes.section}>
              <Section section={sections[articleSections[key]]}></Section>
            </div>
          ))}
        </div>
      </div>
    )
  }
  /** 
      return (
          <div>
              <div className={classes.title}>
                  <Typography variant="h1">Article Title</Typography>
              </div>
              <div className={classes.sectionView}>
                  <Section section={sections['Turn on the System']}></Section>
                  <Section section={sections['Turn on the System']}></Section>
              </div>
          </div>
      ) */
}

export default withStyles(styles)(Article);