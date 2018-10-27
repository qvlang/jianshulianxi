import style from "styled-components";

export const DetailWrapper = style.div`
  width: 620px;
  padding-top: 30px;
  margin: 0 auto;
`;

export const Header = style.div`
  width: 100%;
  margin: 50px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
` ;

export const Content = style.div`
  color: #2f2f2f;
  img{
    width: 100%;
  }
  p{
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`