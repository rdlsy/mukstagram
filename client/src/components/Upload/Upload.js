import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Box, Container, HeaderWrap, Title } from '../../styles/custom';
import { UploadContent, UploadForm, DropBox, TextBox, Drop } from './style';
import Switch from '../../styles/components/Switch';
import Dropzone from 'react-dropzone';

export default function Upload({ onSubmit, uploadImage, onDrop, back }) {
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const onChange = e => {
    setDescription(e.target.value);
  }
  const onChangeChk = e => {
    setPrivacy(e.target.checked ? 1 : 0);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      description: description,
      privacy: privacy
    });
  }

  return (
    <Container popup>
      <UploadForm onSubmit={handleSubmit}>
        <HeaderWrap popup>
          <Box header>
            <button onClick={back}><IoIosArrowBack /></button>
            <Title>새 개시물</Title>
            <button className="share" type="submit" onClick={handleSubmit}>공유</button>
          </Box>
        </HeaderWrap>
        <UploadContent>
          <Drop>
            {
              uploadImage ?
              <DropBox>
                <img src={`https://mukstagram.herokuapp.com/${uploadImage}`} alt="" />
              </DropBox> :
              <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
              >
                {({ getRootProps, getInputProps }) => (
                  <DropBox { ...getRootProps()}>
                    <input { ...getInputProps()} />
                    <AiOutlinePlus />
                  </DropBox>
                )}
              </Dropzone>
            }
            <TextBox placeholder="문구 입력..." name="description" onChange={onChange} value={description} />
          </Drop>
          <Switch 
            text="공개 여부"
            onChange={onChangeChk}
            value={privacy}
            id="privacy"
            name="privacy"
          />
        </UploadContent>
      </UploadForm>
    </Container>
  );
}