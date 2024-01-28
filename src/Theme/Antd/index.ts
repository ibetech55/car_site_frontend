import { ConfigProviderProps } from "antd";
const primaryColor = "#000740";
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
      // Select: {
      //   colorBorder: primaryColor,
      //   colorTextPlaceholder: primaryColor,
      // },
    },
  },
  button: {
    style: { boxShadow: "none" },
  },
};
