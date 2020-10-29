import React, { Component } from 'react';
import TopicCard from '../components/topicCard';
import { Topic } from '../store/topicsSlice';

const topicRes: Topic = {
  name: 'Fetal Doppler',
  description: 'This is the Fetal Doppler topic.',
  url:
    'https://uc9768d41027348b559e9a3fe617.previews.dropboxusercontent.com/p/thumb/AA9Gh4Dv-Vm8Gn7r8mMRWWWBVQrF6oAsRf36diA41ugYLkkF6AI-GXGL4bD9QpJ71hDg5kjz3FHYIyCknIybLVZeX_XEeo-JHr25vaYlB3QWE6B3cI6z5YdrfVVSGZpIPq_tGaKiOqBXoSprJCoPGeBgDHAC2g2V0gH7BJM7K1iIF6czJMiUrk8GdiEeMZXSfKgw3FMe2iKX4RAalS886GMjGmOUmnTGxHcc8ztn8-u1jkXNczzbadtkajd219AkWHqJFvu2yfpqzMYdTcEpCUA1ZfjNZLIDWCwkLMTvQev9Ti17ZLOghto-wpkJcbgQiItyBe5TpKN04czF4XeJs8UfT9vlid1nbBvKQpM_oeFvZbTJtXiau27vyUAiCMvz5NF1TwsMQm7124t8i7KMI9ai4CzYLJfnBk6RkuR3xxonWoGyU7_6sGOlXLHnHfBaYL4/p.png?size=2048x1536&size_mode=3',
  isFinished: false
};

export default class Suitcase extends Component {
  render() {
    return (
      <div>
        <TopicCard />
      </div>
    );
  }
}
