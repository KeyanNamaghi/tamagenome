import styled from 'styled-components'

export const Eye = styled.path`
  fill: black;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  transform: ${(props) => 'scale(' + props.eyeSize + ')'};
`

export const Nose = styled.path`
  fill: black;
  transform-origin: 50% 50%;
  transform-box: fill-box;
  transform: ${(props) => 'scale(' + props.noseSize + ')'};
`
