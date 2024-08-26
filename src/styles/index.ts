/* eslint-disable */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/* Define common variables */
const colorPrimary = '#666';
const colorSecondary = '#333';
const colorBackground = '#f9f9f9';
const colorLightGray = '#f0f0f0';
const colorDarkGray = '#ccc';
const colorWhite = '#fff';
const colorText = '#999';

const fontSizeSmall = '12px';
const fontSizeMedium = '14px';
const fontSizeLarge = '18px';
const fontSizeXLarge = '24px';

const paddingSmall = '10px';
const paddingMedium = '20px';
const marginSmall = '10px';
const marginMedium = '20px';
const marginLarge = '30px';

const borderRadiusSmall = '5px';
const borderRadiusMedium = '10px';

const breakpointSmall = '300px';

/** **************************************************************************************************** */
/****************************************************************************************************** */
/****************************************** SHOW DETAIL *********************************************** */
/****************************************************************************************************** */
/****************************************************************************************************** */

const BaseText = styled.div<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}>`
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color }) => color || 'inherit'};
`;

const BaseWrapper = styled.div<{
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
`;

const BaseImageWrapper = styled.div<{
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* Extend base text component */
export const SeasonNumber = styled(BaseText)`
  font-size: ${fontSizeLarge};
  font-weight: bold;
`;

export const EpisodeCount = styled(BaseText)`
  font-size: ${fontSizeMedium};
  color: ${colorPrimary};
`;

export const EpisodeTitle = styled(BaseText)`
  font-size: ${fontSizeLarge};
  font-weight: bold;
  margin-bottom: ${marginSmall};
`;

export const SeasonHeader = styled(BaseText)`
  margin-top: ${marginLarge};
  font-size: ${fontSizeXLarge};
  color: ${colorSecondary};
`;

export const Summary = styled(BaseText)`
  font-size: 1.2rem;
  margin-top: ${marginMedium};
`;

/* Extend base wrapper component */
export const ShowDetailWrapper = styled(BaseWrapper)`
  min-height: 100vh;
`;

export const ShowContent = styled(BaseWrapper)``;

export const EpisodeInfo = styled(BaseWrapper)`
  height: 80px;
  overflow: hidden;
  @media (max-width: ${breakpointSmall}) {
    height: auto;
    overflow: visible;
  }
`;

export const Container = styled(BaseWrapper)`
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: ${colorBackground};
  padding: ${paddingMedium};
`;

/* Extend base image wrapper component */
export const EpisodeImageContainer = styled(BaseImageWrapper)`
  width: 100px;
  height: 80px;
  margin-right: ${marginMedium};
  background-color: ${colorLightGray};
  font-size: ${fontSizeSmall};
  color: ${colorText};
  text-align: center;
  flex-shrink: 0;
`;

export const ImageWrapper = styled(BaseImageWrapper)`
  height: 500px;
  margin-bottom: ${marginMedium};
  background-color: ${colorLightGray};
  border-radius: ${borderRadiusMedium};
  flex: 1;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ImagePlaceholder = styled(BaseImageWrapper)`
  background-color: ${colorDarkGray};
  font-size: ${fontSizeSmall};
  color: ${colorText};
  text-align: center;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

export const EpisodeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${borderRadiusSmall};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${borderRadiusMedium};
`;

export const ShowDetailMain = styled.main<{
  backgroundImage?: string | undefined;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${paddingMedium};
  background: ${({ backgroundImage }) =>
    backgroundImage
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
      : colorLightGray};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${colorWhite};
`;

export const ShowHero = styled.section<{ backgroundImage: string | undefined }>`
  background: rgba(2, 62, 138, 0.1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px ${paddingMedium};
  color: ${colorWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 40vh;
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ShowImage = styled.img`
  flex: 0 0 33%;
  height: 100%;
  width: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ShowDescription = styled.div`
  flex: 1;
  text-align: left;
  color: black;
`;
export const SeasonTabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

export const SeasonTab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: ${paddingSmall} ${paddingMedium};
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? colorWhite : colorLightGray};
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${colorSecondary}` : 'none'};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  outline: none;

  &:hover {
    background-color: #ddd;
  }
`;

export const EpisodesWrapper = styled.div`
  background-color: rgba(202, 240, 248, 0.8);
  color: black;
  padding: ${paddingSmall};
`;

export const EpisodesList = styled.div`
  margin-top: ${marginSmall};
`;

export const EpisodeLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${paddingSmall};
  margin-bottom: ${marginSmall};
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: ${borderRadiusSmall};
  background-color: ${colorBackground};
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const EpisodeDescription = styled.p`
  margin: 0;
  font-size: ${fontSizeMedium};
  color: ${colorPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: ${breakpointSmall}) {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

/****************************************************************************************************** */
/****************************************************************************************************** */
/****************************************** Episode DETAIL ******************************************** */
/****************************************************************************************************** */
/****************************************************************************************************** */

export const Title = styled.h1`
  font-size: 2rem;
`;

/* New styles for EpisodeDetail */
export const Content = styled(BaseWrapper)`
  width: 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextWrapper = styled(BaseWrapper)`
  flex: 1;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${marginMedium};
  }
`;
