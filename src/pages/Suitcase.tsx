import React, { Component } from 'react';
import TopicViews from '../components/TopicViews';
import { Topic } from '../store/topicsSlice';

const topicRes: Topic = {
  name: 'Fetal Doppler',
  description: 'This is the Fetal Doppler topic.',
  url:
    'https://uce72b88e033b1894a6bd4a6893b.previews.dropboxusercontent.com/p/thumb/AA-VALtZ50Wlxc8KjAP_HrFUjfRQGn3XDl23bB8fKh0L_vWoVs0of8hzmp_3jpjSnCjBSD6pJvCH2fiDJ1_OjG7nBJ-0so-dUFgm0HlYzF1tyEPftOMkuHfJUiCuVzuth-jWJenQB5TUWTfX1xaG7NXAbuM7aZl48yKSsJC3tssAxPqcN3onDGxwTgCGDCNppvIX5mGaX9A4XhfpIFLpJidwRke8tgW0xEML4Cf2nJjMIezUpOWBIA-PCd96m4v6jtbNHzm-8k5uFr3xw8vIrfvIVpzvSY7STDl17Sks7ZO9778UEp0elfzQUXQnBYRzYiQnHyVfr0FHd32YvomNjvm7D2WjOJwgmcddPpBZoW5sEFqT04mJHHnLG7kg9JbnfAlV3HLQ6Vmru6Je_iMN-VWoEp3xfjfZzyuPJlsJJyunzg/p.png?fv_content=true&size_mode=5',
  isFinished: false
};

export default class Suitcase extends Component {
  render() {
    return (
      <div>
        <TopicViews topic={topicRes} />
      </div>
    );
  }
}
