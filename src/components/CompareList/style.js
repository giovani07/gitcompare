import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const Repository = styled.div`
  width: 250px;
  margin: 0 10px 20px 10px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    .remove {
      color: #bbb;
      font-size: 14px;
      position: absolute;
      padding: 2px;
      top: 8px;
      right: 8px;
      background: none;
      border: 0;
      text-shadow: 0 1px 0 #ddd;

      &:hover {
        color: #666;
      }
    }
  }

  .update {
    color: #bbb;
    font-size: 14px;
    position: absolute;
    padding: 2px;
    bottom: 8px;
    right: 8px;
    background: none;
    border: 0;
    text-shadow: 0 1px 0 #ddd;

    &:hover {
      color: #666;
    }
  }
  .rotate1 {
    -webkit-animation: fa-spin 1s 1 linear;
    animation: fa-spin 0.7s 1 linear;
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f3f3f3;
      }
    }
  }
`;
