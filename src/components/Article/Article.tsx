import { Grid, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
    const resources = useSelector((state: RootState) => state.resources)
    const article = resources[resId]
    const sections = useSelector((state: RootState) => state.sections)

    const [scrollTop, setScrollTop] = useState(0)
    
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

      const scrolled = (winScroll / height) * 100

      setScrollTop(scrolled)
    }

    useEffect(() => {
      window.addEventListener("scroll", onScroll)


      return () => window.removeEventListener("scroll", onScroll)
    }, [])
    
    if (isArticle(article.data)) {
        const articleSections = article.data.sections
        return (
            <div>
              <div className={classes.fixed}>
                <div className={classes.title}>
                  <Typography variant="h1">{article.title}</Typography>
                </div>
                <div className={classes.progressBar}>
                  {ProgressBar(scrollTop, 'article')}
                </div>
                <div className={classes.progressText}>
                  <Typography variant="h3">{Math.round(scrollTop)} % <br /> Complete</Typography>
                </div>
              </div>
              <div className={classes.sections}>
                {articleSections.map((key: any) => (
                  <SectionCard section={sections[key]}></SectionCard>
                ))}
              </div>
            </div> 
            )
}
]
