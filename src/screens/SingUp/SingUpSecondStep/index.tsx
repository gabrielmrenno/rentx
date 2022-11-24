import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import { Confirmation } from '../../Confirmation';

import {
    Container,
    Header,
    Steps,
    Title,
    Subtitle,
    Form,
    FormTitle,
} from './styles';

// to retrieve user data, we need to type
interface Params {
    user: {
        name: string;
        email: string;
        driverLicense: string;
    }
}

export function SingUpSecondStep() {
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const navigation = useNavigation();
    const theme = useTheme();

    // to retrieve user data from first step screen
    const route = useRoute();
    const { user } = route.params as Params;

    function handleBack() {
        navigation.goBack();
    }

    function handleRegister() {
        //verify if inputs has data
        if (!Boolean(password) || !Boolean(passwordConfirm)) {
            return Alert.alert('Informe a senha e a sua confirmação.');
        }

        // confirming if password and passwordConfirm is different
        if (password != passwordConfirm) {
            return Alert.alert('As senhas devem ser iguais.');
        }

        // To send to api to register and call success screen
        navigation.navigate('Confirmation', {
            title: 'Conta criada',
            message: `Agora é só fazer o login\ne aproveitar`,
            nextScreenRoute: 'SignIn'
        });
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Steps>
                            <Bullet active />
                            <Bullet />
                        </Steps>
                    </Header>
                    <Title>Crie sua{'\n'}conta</Title>
                    <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil</Subtitle>

                    <Form>
                        <FormTitle>2. Senha</FormTitle>

                        <PasswordInput
                            iconName='lock'
                            placeholder='Senha'
                            onChangeText={setPassword}
                            value={password}
                        />
                        <PasswordInput
                            iconName='lock'
                            placeholder='Repetir senha'
                            onChangeText={setPasswordConfirm}
                            value={passwordConfirm}
                        />
                    </Form>

                    <Button
                        title='Cadastrar'
                        color={theme.colors.success}
                        onPress={handleRegister}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}