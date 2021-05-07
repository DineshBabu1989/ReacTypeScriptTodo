import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string; // body
    primaryColor: string; // button and border
    secondaryColor: string; // faded button
    textColorPrimary: string; // text inside large button
    textColorSecondary: string; // text inside todo block
    borderBottom: string;
  }
}
