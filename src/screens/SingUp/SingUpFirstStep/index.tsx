import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
    Container,
    Header,
    Steps
} from './styles';

export function SingUpFirstStep() {
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
                <Steps>
                    <Bullet active />
                    <Bullet />
                </Steps>
            </Header>
            {/* <Title></Title> */}
        </Container>
    );
}