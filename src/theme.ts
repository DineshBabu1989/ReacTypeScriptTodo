import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  backgroundColor: "#fff", // body
  primaryColor: "#3f20ba", // button and border
  secondaryColor: "#9b8ade", // faded button
  textColorPrimary: "white", // text inside large button
  textColorSecondary: "black", // text inside todo block
  borderBottom: "#ccc", // grey border
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#333", // body
  primaryColor: "#7affa3e8", // button and border
  secondaryColor: "#74a282e8", // faded button
  textColorPrimary: "black", // text inside large button
  textColorSecondary: "white", // text inside todo block
  borderBottom: "#ccc", // grey border
};
