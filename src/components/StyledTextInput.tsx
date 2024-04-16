import { IInputProps, Input } from "native-base";
import React from "react";

interface InputProps extends IInputProps {
  style: any;
}

export function TextInput({ ...props }: InputProps) {
  return <Input bg="white" flex={1} width={"100%"} {...props} />;
}
