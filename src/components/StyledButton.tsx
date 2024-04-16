import { Button, IButtonProps } from "native-base";
import React from "react";

interface StyledButtonProps extends IButtonProps {
  children?: React.ReactNode;
}

export function PrimaryButton({ children, ...props }: StyledButtonProps) {
  return (
    <Button {...props} colorScheme={"accent"}>
      {children}
    </Button>
  );
}
