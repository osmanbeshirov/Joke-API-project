import styled from "styled-components";

import { DefaultTheme } from "styled-components";

interface ImageProps {
    theme: DefaultTheme
}

const Img = styled.img<ImageProps>`
width: 80px;
height: 80px
`

export default Img;