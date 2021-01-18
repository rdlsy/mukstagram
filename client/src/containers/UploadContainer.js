import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ToastPopup from '../components/ToastPopup/ToastPopup';
import Upload from '../components/Upload/Upload';
import { uploadPost } from '../_action/post_action';

function UploadContainer(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [fileInfo, setFileInfo] = useState({
    filePath: '',
    type: ''
  });
  const [videoInfo, setVideoInfo] = useState({
    duration: '',
    thumbnail: ''
  });
  const [uploadImage, setUploadImage] = useState('');

  const back = useCallback((e) => {
    e.preventDefault();
    props.history.goBack();
  },[props.history]);

  const onDrop = (files) => {
    let formData = new FormData();

    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }

    formData.append('file', files[0])

    axios.post('/api/posts/uploadfiles', formData, config)
      .then(response => {
        if (response.data.success) {
          let variable = {
            url: response.data.url,
            fileName: response.data.fileName,
            mimetype: response.data.mimetype
          }
          setFileInfo({
            filePath: response.data.url,
            type: response.data.mimetype
          })

          if (response.data.mimetype === 'video/mp4') {
            axios.post('/api/posts/thumbnail', variable)
              .then(response => {
                  if (response.data.success) {
                    setVideoInfo({
                      duration: response.data.fileDuration,
                      thumbnail: response.data.url
                    })
                    setUploadImage(response.data.url)
                  } else {
                    alert('Failed to make the thumbnails');
                  }
                })
          } else {
            setUploadImage(response.data.url)
          }
        } else {
          alert('failed to save the file in server')
        }
    })
  }

  const onSubmit = useCallback(({ description, privacy }) => {
    const variables = {
      writer: user.userData._id,
      description: description,
      privacy: privacy,
      filePath: fileInfo.filePath,
      duration: videoInfo.duration,
      thumbnail: videoInfo.thumbnail,
      type: fileInfo.type
    }
    dispatch(uploadPost(variables))
      .then(response => {
        if (response.payload.success) {
          setOpen(true);
          setTimeout(() => {
            props.history.push('/mukjya');
          }, 2000)
        } else {
          alert('파일 업로드에 실패했습니다.')
        }
      })
  }, [dispatch, user.userData, fileInfo, videoInfo, props.history]);

  return (
    <>
      {open && <ToastPopup text="성공적으로 업로드를 했습니다. ☺️" />}
      <Upload back={back} onSubmit={onSubmit} onDrop={onDrop} uploadImage={uploadImage} filePath={fileInfo.filePath} thumbnail={videoInfo.thumbnail} />
    </>
  )
}

export default withRouter(UploadContainer);