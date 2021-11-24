import styled from "styled-components";
import style from '../../assets/global-style';

export const NavContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 8px;
`
export const ListContainer = styled.div`
  position: fixed;
  top: 160px;
  left: 0px;
  bottom: 0px;
  width: 100%;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.div`
  display: flex;
  margin: 0 5px;
  padding: 5px 0;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
  }
`
