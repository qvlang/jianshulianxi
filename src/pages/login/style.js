import style from 'styled-components';

export const LoginWrapper = style.div`
  position: absolute;
  z-index: 0;
  top: 56px;
  right: 0;
  left: 0;
  background: #eee;
`;
export const LoginBox = style.div`
  width: 400px;
  height: 180px;
  padding-top: 30px;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0 , 0, 0, 0.1);
`;
export const Input = style.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  padding: 0 10px;
  color: #777;
`;
export const Button = style.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
`;