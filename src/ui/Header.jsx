import styled from "styled-components"
import Logout from "../features/authentication/Logout";

//we nat named Header because we can not create a new Header element so it this type of cases use Styled in the start
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);;
    border-bottom: 1px solid var(--color-grey-100);
    padding: 1.2rem 4.8rem;
`;

function Header() {
    return (
        <StyledHeader>
            header
            <Logout/>
        </StyledHeader>
    )
}

export default Header
