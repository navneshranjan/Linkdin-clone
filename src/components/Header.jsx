import styled from "styled-components";
import Styled from "styled-components";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images 2/home-logo.svg" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a>
                <img src="/images 2/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = Styled.div`
background-color:white;
border-bottom:1px solid rgba(0,0,0,0.08);
left: 0;
padding: 0 24px;
top: 0;
position:fixed;

width: 100vw;
z-index:100;
`;
const Content = Styled.div`
display:flex;
align-items:center;
margin:0 auto
min-height:100%;
max-width:1128px;


`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  /* whole thing is a text  box insted of pointer */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  } ;
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    background: transparent;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default Header;