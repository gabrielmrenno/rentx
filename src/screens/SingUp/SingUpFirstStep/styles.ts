import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding:  0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};

  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(24)}px;

  margin-bottom: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(48)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(24)}px;
`;