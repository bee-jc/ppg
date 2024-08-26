import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { getEpisodeDetails } from '../../redux/slices/episodeSlice';
import { RootState, AppDispatch } from '../../redux/store';

import {
  ImageWrapper as StyledImageWrapper,
  Image,
  Title,
  Summary,
} from '../../styles';

const ImageWrapper = styled(StyledImageWrapper)`
  flex: 1;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-size: 1.2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: 20px;
  }
`;

const MyContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const EpisodeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const episode = useSelector((state: RootState) => state.episode.details);

  useEffect(() => {
    if (id) {
      dispatch(getEpisodeDetails(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <MyContainer>
      <Content>
        <ImageWrapper>
          {episode.image?.original ? (
            <Image src={episode.image.original} alt={episode.name} />
          ) : (
            <Placeholder>No image available</Placeholder>
          )}
        </ImageWrapper>
        <TextWrapper>
          <Title>{episode.name}</Title>
          {episode.summary ? (
            <Summary dangerouslySetInnerHTML={{ __html: episode.summary }} />
          ) : (
            <Summary>No summary available.</Summary>
          )}
        </TextWrapper>
      </Content>
    </MyContainer>
  );
};

export default EpisodeDetail;
