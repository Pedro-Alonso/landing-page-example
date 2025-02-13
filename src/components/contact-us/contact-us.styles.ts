"use client";

import Theme from "@/theme/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: ${Theme.colors.gray};
`;
