import styled from "styled-components";

const Button = styled.button`
  min-width: 64px;

  padding: 6px 16px;

  border: 0;
  border-radius: 4px;
  outline: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  line-height: 1.75;
  font-weight: 500;
  letter-spacing: 0.02857em;

  background-color: #1e212a;
  color: #fff;

  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  transition: background-color 250ms, box-shadow 250ms, border 250ms;

  &:hover {
    background-color: #4b4d55;
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }
`;

export default Button;
