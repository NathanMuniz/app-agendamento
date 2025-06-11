import { useAuth } from '@/context/AuthContext';
import { View, Text } from 'react-native';

export default function TabOneScreen() {
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-dark dark:text-white">
        Bem-vindo, {user?.name || 'Usuário'}!
      </Text>
      
      <View className="mt-4 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
        <Text className="text-dark dark:text-white">
          Email: {user?.email || 'N/A'}
        </Text>
        <Text className="text-dark dark:text-white mt-2">
          ID: {user?.id || 'N/A'}
        </Text>
      </View>
    </View>
  );
}