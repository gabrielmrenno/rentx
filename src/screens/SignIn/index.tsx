import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
    Container,
    Header,
    Title,
    Subtitle,
    Form,
    Footer
} from './styles';

export function SignIn() {
    const theme = useTheme();

    return (
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
                />
                <Input
                    iconName="lock"
                />
            </Form>

            <Footer>
                <Button
                    title='Login'
                    onPress={() => { }}
                    enabled={false}
                    loading={false}
                />
                <Button
                    title='Criar conta gratuita'
                    onPress={() => { }}
                    light
                    enabled={false}
                    loading={false}
                    color={theme.colors.background_secondary}
                />
            </Footer>
        </Container>
    );
}