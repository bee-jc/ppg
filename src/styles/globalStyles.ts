import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'PowerPuffGirlsFont';
    src: url('/fonts/powerpuff girls font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
