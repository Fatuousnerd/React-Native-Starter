import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from 'navigation/StackNavigator';
import { TamaguiProvider } from 'tamagui';
import { config } from 'tamagui.config';

export default function App() {
  return (
    <>
      <TamaguiProvider config={config}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </TamaguiProvider>
    </>
  );
}
