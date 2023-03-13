import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFont: string;
    colors: {
      mainColor: string;
      mainButtonColor: string;
      inputLoginFormBackground: string;
      secondaryColorLogin: string;
      datesColor: string;
      cardBackground: string;
    };

    radiusLoginInputButton: string;
  }
}
