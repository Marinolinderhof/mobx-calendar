// style-utils.js
import { css } from 'styled-components';

const sizes = {
  large: 992,
  medium: 768,
  small: 376
};

const mediaqsizes = {
  gtLarge: ['min-width', sizes.large + 1],
  gtMedium: ['min-width', sizes.medium + 1],
  gtSmall: ['min-width', sizes.small + 1],
  ltLarge: ['max-width', sizes.large],
  ltMedium: ['max-width', sizes.medium],
  ltSmall: ['max-width', sizes.small]
};

// Iterate through the sizes and create a media template
const mediaq = Object.keys(mediaqsizes).reduce((acc, mediaqsize) => {
  acc[mediaqsize] = (...args) => css`
    @media (${mediaqsizes[mediaqsize][0]}: ${mediaqsizes[mediaqsize][1] /
    16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default mediaq;
