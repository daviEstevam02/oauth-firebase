import { Flex, Spinner } from "@chakra-ui/react";

interface LoadingProps {
  isLoading: boolean;
}
export function Loading({ isLoading }: LoadingProps) {
  return (
    <Flex
      display={isLoading ? "flex" : "none"}
      position="absolute"
      inset="0px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.500"
      zIndex="tooltip"
    >
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="primary.default"
        size="xl"
      />
    </Flex>
  );
}
