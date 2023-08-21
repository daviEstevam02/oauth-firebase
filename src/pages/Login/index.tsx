import {
    Box,
    Flex,
    FormLabel,
    Heading,
    IconButton,
    Image,
    Input as InputChakra,
    InputGroup,
    InputRightElement,
    Text,
} from "@chakra-ui/react";

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import loginImg from '../../assets/loginImage.png';


import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { AlertLogin } from "../../components/AlertLogin";
import { useUser } from "../../hooks/useUser";
import { SignIn } from "../../@types/sign-in";

interface FormLogin {
    username: string;
    password: string;
}

export function Login() {
    const [isMaskedPassword, setisMaskedPassword] = useState(false);
    const { register, handleSubmit } = useForm<FormLogin>();
    const { signIn, error } = useUser();

    const onSubmit: SubmitHandler<FormLogin> = async ({
        username,
        password,
      }: SignIn) => {
        await signIn({ username, password });
      };

    function handleMaskedPassword() {
        setisMaskedPassword((oldState) => !oldState);
      }

    return(
        <>
            <Flex
                width="full"
                height="calc(100vh - 1rem)"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                paddingTop="16"
            >
                <Flex
                flex="1"
                width="full"
                maxWidth="1200px"
                borderRadius="md"
                backgroundColor="white"
                boxShadow="2xl"
                overflow="hidden"
                >
                <Flex
                    flex={{ base: "1", xl: "3" }}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="#F8F8F8"
                    paddingX={{ base: "6", md: "8", lg: "12" }}
                    paddingY="6"
                >
                    <Image
                    width="full"
                    height="full"
                    src={loginImg}
                    alt="Let's paixão pelo melhor"
                    />
                </Flex>
                <Flex
                    flex={{ base: "1", xl: "2" }}
                    flexDirection="column"
                    justifyContent="center"
                    paddingX={{ base: "6", md: "8", lg: "12" }}
                    paddingY="6"
                >
                    <Heading
                    as="h1"
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="800"
                    >
                    SEJA BEM-VINDO!
                    </Heading>
                    <Text marginTop="2">Antes de continuar, faça seu Login.</Text>
                    {error && (
                        <AlertLogin status="error" description={error} marginTop="4" />
                    )}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                label="Usuário ou e-mail"
                                autoComplete="username"
                                placeholder="Insira seu usuário ou e-mail"
                                size="lg"
                                {...register("username", { required: true })}
                            />
                            <Box marginTop="4">
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <InputGroup size="lg" flexDirection="column">
                                <InputChakra
                                pr="4.5rem"
                                type={isMaskedPassword ? "text" : "password"}
                                placeholder="Insira sua senha"
                                autoComplete="current-password"
                                {...register("password", { required: true })}
                                />
                                <InputRightElement width="4.5rem">
                                <IconButton
                                    aria-label="Senha visivel"
                                    variant="ghost"
                                    size="md"
                                    boxShadow="none"
                                    onClick={handleMaskedPassword}
                                    icon={
                                    <Box
                                        as="i"
                                        className="material-icons-outlined"
                                        color="gray.300"
                                    >
                                        {isMaskedPassword ?  <AiOutlineEyeInvisible size={18} /> :<AiOutlineEye size={18}/> }
                                    </Box>
                                    }
                                />
                                </InputRightElement>
                            </InputGroup>
                            </Box>
                            <Box marginTop="8">
                            <Button
                                title="Acessar minha conta"
                                type="submit"
                                width="full"
                                size="lg"
                                textTransform="uppercase"
                            />
                            </Box>
                        </Form>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}