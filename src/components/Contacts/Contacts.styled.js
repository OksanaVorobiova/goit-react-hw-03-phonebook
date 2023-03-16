import styled from 'styled-components';

export const ContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  border: 1px dashed #a2cfd6;
  border-radius: 8px;
  padding: 8px;

  li {
    padding: 5px;
    border-radius: 8px;
    border: 1px solid #10b1ca;

    &:not(:last-child) {
      margin-bottom: 5px;
    }

    button {
      border-radius: 8px;
      border: 1px solid #10b1ca;
      background-color: #a2cfd6;
      padding: 5px;

      color: #313131;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;
