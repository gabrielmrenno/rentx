import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
    Container,
    Header,
    Title,
    Subtitle,
    Form,
    Footer
} from './styles';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const theme = useTheme();

    async function handleSingIn() {
        // if the validation is not valid, Yup throw an error
        try {
            // to define schema validation form
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    // validates if the content has an e-mail shape
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .required('Senha obrigatória')
            });

            // the Yup validation can take a while
            // pass the input state to validate
            await schema.validate({ email, password })

            // TODO: Login
        } catch (error) {
            // 2 error kinds: Yup validation or general error
            // taking the Yup error
            if (error instanceof Yup.ValidationError) {
                // error.type returns error source. ex.: email
                Alert.alert('Opa ', error.message);
            } else {
                Alert.alert(
                    'Error na autenticação!!',
                    'Ocorreu um erro ao fazer o login, verifique as credenciais'
                )
            }
        }

    }

    function handleNewAccount() {
        navigation.navigate('SingUpFirstStep');
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle='dark-content'
                        translucent
                        backgroundColor="transparent"
                    />

                    <Header>
                        <Title>
                            Estamos{'\n'}quase lá.
                        </Title>
                        <Subtitle>
                            Faça seu login para começar{'\n'}
                            uma experiência incrível.
                        </Subtitle>
                    </Header>

                    <Form>
                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            value={email}
                        />
                        <PasswordInput
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Login'
                            onPress={handleSingIn}
                            enabled={Boolean(email) && Boolean(password)}
                            loading={false}
                        />
                        <Button
                            title='Criar conta gratuita'
                            onPress={handleNewAccount}
                            light
                            enabled={true}
                            loading={false}
                            color={theme.colors.background_secondary}
                        />
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}