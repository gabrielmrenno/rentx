import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';
import {
    Container,
    LogoContainer,
    Content,
    Title,
    Message,
    Footer
} from './styles';
import { RootStackParamList } from '../../@types/navigation';

// To receive dynamic data to show
interface Params {
    title: string;
    message: string;
    // keyof takes an object type and produces a string
    nextScreenRoute: keyof RootStackParamList;
}

export function Confirmation() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();
    const route = useRoute();

    const { title, message, nextScreenRoute } = route.params as Params;

    function handleSchedulingFinished() {
        navigation.navigate(nextScreenRoute);
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <LogoContainer>
                <LogoSvg width={width} />
            </LogoContainer>

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>{title}</Title>
                <Message>
                    {message}
                </Message>
            </Content>

            <Footer>
                <ConfirmButton
                    title="OK"
                    onPress={() => handleSchedulingFinished()}
                />
            </Footer>

        </Container>

    );
}