import styled from "styled-components";
import { flexMixin, fontMixin, flexMixin2 } from "../styled/styled";

const StyledHeader = styled.header`
    ${flexMixin({ justify: "space-between", align: "center" })};
    padding: 20px 20px;
    background-color: black;
    ul {
        ${flexMixin({ justify: "space-betwenn", align: "center", gap: "20px" })};

        li {
            ${fontMixin({ size: "16px", weight: "400" })};
            list-style: none;
        }
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>OZ코딩스쿨</h1>
            <ul>
                <li>로그인</li>
                <li>회원가입</li>
                <li>내클래스</li>
            </ul>
        </StyledHeader>
    );
}
