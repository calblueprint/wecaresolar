import React, { Component } from 'react';
import TopicViews from '../components/TopicViews';
import { Topic } from '../store/topicsSlice';

const topicRes: Topic = {
  name: 'Fetal Doppler', 
  description: 'This is the Fetal Doppler topic.', 
  url: 'https://ucc868501cde78db81d8a92f793e.previews.dropboxusercontent.com/p/thumb/AA_fJuTUr20-3y0p1X9FI1I1BMjd2vl3B0lzQyXo2Vjn4yrC2_xY0v2A5qRRjTR5rMiUjbf_VlrjNxkI_mET9-jFLEmF8LTrbsL-li1BoLJzCcZTNyq6kGk-kR3CeMlRAGD94_IwrjEq5-U9ItfeI5CCxCN-f2G8mVC65XR9RSk1DjW6o0vlk1kiP6YiS23mRWR2_-CEukLUMY8iofSK0-mS8h7gw_TZZabeYRkif8CDRrdZnk5tDYCC1-_QeMVK7ZwncMtGwHxFfIOKEyBlONwPLNHH7StR3m5M8GUYrDQ09Mfy8_zYZ_HfNnmAc-UO40xhe_HqZBewpXcOZOEGSH5vcmxe8KZidzRJEqyO_qeOog/p.jpeg?fv_content=true&size_mode=5', 
  isFinished: false
}

export default class Suitcase extends Component {
  render() {
    return <div><TopicViews topic={topicRes}/></div>
  }
}