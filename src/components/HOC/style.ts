import styled from 'styled-components';

export const Container = styled.div<ContainerProps>`
  position: relative;
  ${props => {
    if (props.passedMinDelay) return '';

    //
    /**
     * Visually hide everything until minimum amount of time has passed.
     * It's important to use visibility instead of display to assure that the loading process doesn't get disturbed
     */
    return `
        & * {
            visibility: hidden !important;
        }
    `;
  }}
`;

interface ContainerProps {
  passedMinDelay: boolean;
}
