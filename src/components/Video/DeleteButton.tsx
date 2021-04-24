import React from 'react';
import { del } from 'idb-keyval';
import DeleteIcon from '@material-ui/icons/Delete';
import { videoStore } from '../../index';
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../../store/resourcesSlice';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoStyles';

type DeleteButtonProps = {
  id: string;
  classes: any;
};

const DeleteButton = ({ id, classes }: DeleteButtonProps) => {
  const dispatch = useDispatch();

  async function deleteVideo(resId, videoStore) {
    del(resId, videoStore)
      .then(() => console.log('Video Deleted'))
      .then(() =>
        dispatch(
          setResourceIsCached({
            id: resId,
            isCached: false
          })
        )
      )
      .catch((error) => console.log(resId, error));
  }

  return (
    <button
      className={`${classes.filledButton} ${classes.button}`}
      onClick={() => deleteVideo(id, videoStore)}
    >
      Delete
      <DeleteIcon style={{ color: 'black' }} />
    </button>
  );
};

export default withStyles(styles)(DeleteButton);
