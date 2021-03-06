import { Link } from "gatsby";
import React from "react";
import { Text, View } from "react-native";
import { useREM } from "react-native-web-hooks";

interface Props {
  siteTitle: string;
  siteDescription: string;
}

const Header = ({ siteTitle = "", siteDescription = "" }: Props) => {
  const accessibilityRole: any = "banner";
  return (
    <View
      accessibilityRole={accessibilityRole}
      style={{
        backgroundColor: `rebeccapurple`,
        marginBottom: useREM(1.45)
      }}
    >
      <View
        style={{
          maxWidth: 960,
          paddingVertical: useREM(1.45),
          paddingHorizontal: useREM(1.0875)
        }}
      >
        <Text
          accessibilityRole="header"
          style={{ fontWeight: "bold", fontSize: useREM(2.25) }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </Text>
      </View>
      <View
        style={{
          maxWidth: 960,
          paddingBottom: useREM(1),
          paddingHorizontal: useREM(1.0875)
        }}
      >
        <Text accessibilityRole="header" style={{ fontSize: useREM(1) }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteDescription}
          </Link>
        </Text>
      </View>
    </View>
  );
};
export default Header;
