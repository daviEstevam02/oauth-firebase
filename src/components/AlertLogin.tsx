import {
    Alert as ChakraAlert,
    AlertProps as ChakraAlertProps,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box,
  } from "@chakra-ui/react";
  
  interface AlertLogintProps extends ChakraAlertProps {
      title?: string;
      description: string;
      status: "error" | "success" | "warning" | "info" | undefined;
      closeButton?: boolean;
  }
  
  export function AlertLogin({
    title = "", description, status, closeButton = false, ...rest
  }: AlertLogintProps) {
    return (
      <ChakraAlert
        minHeight="16"
        status={status}
        {...rest}
      >
        <Box
          position="absolute"
          left="0"
          height="full"
          width="3px"
          backgroundColor={"white"}
        />
        <Box
          as="i"
          marginRight="3"
          className="material-icons-outlined"
          color={"white"}
        >
          {null}
        </Box>
        {title && (<AlertTitle mr={2}>{title}</AlertTitle>)}
        <AlertDescription>{description}</AlertDescription>
        {closeButton && (<CloseButton position="absolute" right="8px" top="8px" />)}
      </ChakraAlert>
    );
  }
  
  AlertLogin.defaultProps = {
    title: "",
    closeButton: false,
  };
  