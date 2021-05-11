import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    textColorPrimary: string;
    textColorSecondary: string;
    borderBottom: string;
  }
}
