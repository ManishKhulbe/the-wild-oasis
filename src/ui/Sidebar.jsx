import styled from "styled-components"
import Logo from './Logo';
import MainNav from "./MainNav";
import Uploader from '../data/Uploader'
const StyledSideBar= styled.aside`
    background-color: var(--color-grey-0);
    padding: 3rem 2.4rem;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap:3.2rem;
`
function Sidebar() {
    return (
        <StyledSideBar>
            <Logo />
            <MainNav />
            <Uploader/>
        </StyledSideBar>
    )
}

export default Sidebar
