import { View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useColorScheme } from 'nativewind';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const { login } = useAuth();
  const { colorScheme } = useColorScheme();

  const handleLogin = async () => {
    // if (!email || !password) {
    //   Alert.alert('Erro', 'Por favor, preencha todos os campos');
    //   return;
    // }

    // setLoading(true);
    // try {
    //   await login({ email, password });
    // } catch (error) {
    //   Alert.alert(
    //     'Falha no Login',
    //     error.message || 'Credenciais inválidas. Por favor, tente novamente.'
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <View className="flex-1 justify-center p-8 bg-white dark:bg-black">
      <TextInput
        className="h-12 border border-gray-300 dark:border-gray-700 rounded px-4 mb-4 text-dark dark:text-white"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor={colorScheme === 'dark' ? '#a0a0a0' : '#808080'}
        editable={!loading}
      />
      
      <TextInput
        className="h-12 border border-gray-300 dark:border-gray-700 rounded px-4 mb-6 text-dark dark:text-white"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={colorScheme === 'dark' ? '#a0a0a0' : '#808080'}
        editable={!loading}
      />
      
      {loading ? (
        <ActivityIndicator size="large" color={colorScheme === 'dark' ? 'white' : 'black'} />
      ) : (
        <Button 
          title="Entrar" 
          onPress={handleLogin}
          color={colorScheme === 'dark' ? 'white' : 'black'}
        />
      )}
    </View>
  );
}