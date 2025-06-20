import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Colors from '@/constants/Colors';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          title: 'Settings',
          headerShown: true,
          headerRight: () => (
            <Pressable onPress={() => {}} style={{ marginRight: 15 }}>
              <FontAwesome
                name="sign-out"
                size={25}
                color={Colors[colorScheme ?? 'light'].text}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}