import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Title,
    Subtitle,
    Form,
    FormTitle,
} from './styles';

export function SingUpFirstStep() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [driverLicense, setDriverLicense] = useState<string>('');
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    async function handleNextStep() {
        try {
            // validation is make down to up: driverLicense to name
            const schema = Yup.object().shape({
                name: Yup.string()
                    .required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('E-mail inválido'),
                driverLicense: Yup.string()
                    .required('CNH obrigatória')
            })

            const data = { name, email, driverLicense }
            await schema.validate(data);

            navigation.navigate('SingUpSecondStep', { user: data });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            } else {
                Alert.alert(
                    'Error na autenticação!!',
                    'Ocorreu um erro ao fazer o login, verifique as credenciais'
                )
            }
        }
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
                        <FormTitle>1. Dados</FormTitle>
                        <Input
                            iconName='user'
                            placeholder='Nome'
                            onChangeText={setName}
                            value={name}
                        />
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input
                            iconName='credit-card'
                            placeholder='CNH'
                            keyboardType='numeric'
                            onChangeText={setDriverLicense}
                            value={driverLicense}
                        />
                    </Form>

                    <Button
                        title='Próximo'
                        onPress={handleNextStep}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}