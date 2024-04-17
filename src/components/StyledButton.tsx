import { Button, IButtonProps } from "native-base";
import { ColorSchemeType } from "native-base/lib/typescript/components/types";
import React from "react";

interface StyledButtonProps extends IButtonProps {
  children?: React.ReactNode;
  colorScheme?: ColorSchemeType;
}

export function PrimaryButton({
  children,
  colorScheme,
  ...props
}: StyledButtonProps) {
  return (
    <Button {...props} colorScheme={colorScheme || "accent"}>
      {children}
    </Button>
  );
}
