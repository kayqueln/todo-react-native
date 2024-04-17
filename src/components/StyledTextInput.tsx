import { IInputProps, Input } from "native-base";
import React from "react";

interface InputProps extends IInputProps {
  style?: any;
  fRef?: any;
}

export function TextInput({ fRef, ...props }: InputProps) {
  return <Input ref={fRef} bg="white" flex={1} width={"100%"} {...props} />;
}
