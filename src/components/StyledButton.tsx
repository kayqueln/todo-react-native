import { Button, IButtonProps } from "native-base";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

interface StyledButtonProps extends IButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export function PrimaryButton({
  title,
  onPress,
  style,
  children,
  ...props
}: StyledButtonProps) {
  return (
    <Button {...props} colorScheme={"accent"}>
      {children}
    </Button>
  );
}
