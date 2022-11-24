import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native'

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;

    margin-bottom: ${RFValue(8)}px;
`;

export const IconContainer = styled.View <Props>`
    height: ${RFValue(56)}px;
    width: ${RFValue(55)}px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    margin-right: ${RFValue(2)}px;

    ${({ isFocused, theme }) => isFocused ? css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main}
    ` : null}
`;

export const InputText = styled(TextInput) <Props>`
    flex: 1;
    padding: 0 ${RFValue(23)}px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    ${({ isFocused, theme }) => isFocused ? css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main}
    ` : null}
`;