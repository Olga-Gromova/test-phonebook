import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 4px;
  

  .saveButton {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;
    font-size: 22px;
    color: white;
    background: #80B3FF;
    @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

    &:hover,
    &:focus,
    &:active, {
      background-color: #0cc0df;
      color: white;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 255, 0.4);
      border-color="#89d3da";
    }
  }

`;
