import React from 'react';
import { db } from './firebase';

function FirestoreTest() {

    db.collection('lessons')
    .get()
    .then(q => {
        q.docs.map(doc => console.log(doc.data()));
    });

  return (
    <div>Hi</div>
  );
}

export default FirestoreTest;
