import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useContents from '../useContents';

const CloseBtn = styled.i`
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    color: #d0d0d0;
  }
`;

const FileName = styled.span`
  &:hover {
    color: #d0d0d0;
  }
`;

const FileIcon = styled.i<{ color: string }>`
  font-size: 15px;
  margin-right: 5px;
  color: ${(props) => props.color || 'gray'};
`;

const FileCardWrapper = styled.div<{ background: string }>`
  padding: 8px 20px;
  font-size: 13px;
  color: gray;
  border-right: 1px solid hsl(213, 12%, 19%);
  background: ${(props) => props.background || 'none'};
  ${FileIcon};
`;

interface FileCardProps {
  info: {
    id: number;
    fileType: string;
    name: string;
    url: string;
    faClass: string;
    color: string;
  }
}

function FileCard(props: FileCardProps) {
  const { id, fileType, name, url, faClass, color } = props.info;
  const { selectedHeaderId, onSelected } = useContents();
  const isSelect: boolean = id === selectedHeaderId;
  let history = useHistory();
  let fileOnClick = () => {
    if (isSelect) return;
    onSelected(id);
    history.push(`${url}`);
  };
  return (
    <FileCardWrapper background={isSelect ? '#282c34' : ''}>
      <span style={{ cursor: 'pointer' }} onClick={fileOnClick}>
        <FileIcon className={`${faClass}`} color={color} />
        <FileName>{`${name}.${fileType}`}</FileName>
      </span>
      {
        isSelect ?
          <CloseBtn className='fas fa-times' onClick={() => {
            onSelected(null);
            history.push('/');
          }} />
          : null
      }
    </FileCardWrapper>
  );
}

export default FileCard;