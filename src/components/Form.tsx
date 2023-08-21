import { FormHTMLAttributes, forwardRef, ReactNode } from "react";
import { Box, BoxProps, ChakraComponent } from "@chakra-ui/react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = forwardRef<HTMLFormElement, FormProps & BoxProps>(
  ({ children, ...rest }: FormProps & BoxProps, ref) => {
    const FormBox = Box as ChakraComponent<"form">;

    return (
      <FormBox
        as="form"
        width="full"
        height="100%"
        noValidate
        ref={ref}
        {...rest}
      >
        {children}
      </FormBox>
    );
  },
);
