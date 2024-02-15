import { ConfigProviderProps } from "antd";
import { primaryColor } from "../PrimaryColor/PrimaryColor";
export const theme: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: primaryColor,
    },
    components: {
      Form: {
        labelColor: "#555",
        verticalLabelPadding: 0,
        itemMarginBottom: 10,
      },
      Dropdown: {
        controlItemBgHover: primaryColor,
      },
      Modal: {
        paddingMD: 0,
        paddingContentHorizontalLG: 0,
        marginSM: 0,
        marginXS: 0,
      },
    },
  },
  button: {
    style: { boxShadow: "none" },
  },
};
