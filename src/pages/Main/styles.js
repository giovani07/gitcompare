import styled from 'styled-components';

import 'font-awesome/css/font-awesome.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex:1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 5px 0 0 5px;

    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }
  button{
    height: 55px;
    width: 80px;
    padding: 0 20px;
    background: #37cc85;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;

    &:hover {
      background: #00b15d;
    }
  }
`;
