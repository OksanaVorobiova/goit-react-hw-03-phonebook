import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #a2cfd6;
  border-radius: 8px;
  padding: 8px;

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    font-weight: 600;
    color: #313131;
    font-size: 18px;

    input {
      width: 150%;
      padding: 5px;
      border-radius: 8px;
      border: 1px solid #10b1ca;
    }
  }

  button {
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #10b1ca;
    background-color: #a2cfd6;
    padding: 5px;

    color: #313131;
    font-weight: 400;
    font-size: 16px;
  }
`;
