import { ConfigProviderProps } from "antd";
import { primaryColor } from "../PrimaryColor/PrimaryColor";
export const theme: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: primaryColor,
    },
    components: {
      Dropdown: {
        controlItemBgHover: primaryColor,
        borderRadiusLG: 0,
      },
      Modal: {
        paddingMD: 0,
        paddingContentHorizontalLG: 0,
        marginSM: 0,
        marginXS: 0,
        borderRadiusLG: 0,
      },
    },
  },
  button: {
    style: { boxShadow: "none" },
  },
};
