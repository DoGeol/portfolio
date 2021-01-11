import React from 'react';
import styled from 'styled-components';
import FileCard from './FileCard';
import { header } from '../../../data/portfolio';

const FileTabWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  position: sticky;
  background: #21252b;
  display: flex;
  align-items: center;
  @media screen and ${props => props.theme.mobile} {
    position: fixed;
    top: 50px;
  }
`;

function FileTab() {
  return (
    <FileTabWrapper>
      {
        header.map((file, idx) => {
          return <FileCard info={file} key={`filecard-${idx}`} />;
        })
      }
    </FileTabWrapper>
  );
}

export default FileTab;