import styled from "@emotion/styled";

const colors = {
  info: "#3569A4",
  negative: "#c41e3a"
};

const MessageBar = styled("div")`
  padding: 1em;
  background-color: ${({ type }) => (type ? colors[type] : "#ddd")};
  color: #fff;
  font-size: 1em;
  font-weight: bold;
`;

export default MessageBar;
