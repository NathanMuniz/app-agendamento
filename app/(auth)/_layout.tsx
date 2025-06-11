import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';

// DEFINA A ROTA INICIAL COMO 'login'
export const unstable_settings = {
  initialRouteName: 'index',
};

export default function AuthLayout() {
  const { colorScheme } = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
      }}
    >
      <Stack.Screen name="index" />
      {/* Adicione outras telas de autenticação aqui */}
    </Stack>
  );
}