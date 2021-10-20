import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        share
        <div>
          <img src="/images 2/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="images 2/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="images 2/video-icon.svg" alt="" />

            <span>Video</span>
          </button>
          <button>
            <img src="images 2/event-icon.svg" alt="" />

            <span>Eent</span>
          </button>
          <button>
            <img src="images 2/article-icon.svg" alt="" />

            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-top: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
  margin: 0 0 8px;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      font-weight: 600;
      align-items: center;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    :nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        margin: 0 4px 0 -2px;
      }
      span {
        color: #8787fd;
      }
    }
  }
`;

export default Main;
