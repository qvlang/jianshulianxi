import style from 'styled-components';

export const LoginWrapper = style.div`
  position: absolute;
  overflow: hidden;
  z-index: 0;
  top: 56px;
  right: 0;
  left: 0;
  bottom: 0;
  background: #eee;
`;
export const LoginTitle = style.div`
  width: 280px;
  margin: 0 auto 40px;
  padding: 10px;
  text-align: center;
`;
export const LoginSign = style.div`
  display: inline-block;
  padding: 10px;
  font-weight: 400;
  color: #969696;
  font-size: 18px;
  &.on{
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;
export const LoginBox = style.div`
  width: 400px;
  height: 220px;
  padding-top: 30px;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0 , 0, 0, 0.1);
`;
export const Input = style.input`
  display: block;
  width: 280px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  padding: 0 10px;
  color: #777;
`;
export const Button = style.div`
  width: 304px;
  height: 50px;
  line-height: 50px;
  background: #42c02e;
  border-radius: 25px;
  margin: 30px auto;
  text-align: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;