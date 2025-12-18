import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Your App</Text>
        <Text style={styles.subtitle}>
          Built with Expo and React Native
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="rocket" size={32} color="#007AFF" />
          <Text style={styles.cardTitle}>Get Started</Text>
          <Text style={styles.cardDescription}>
            Start building your mobile app with React Native components
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="code-slash" size={32} color="#34C759" />
          <Text style={styles.cardTitle}>Edit Code</Text>
          <Text style={styles.cardDescription}>
            Modify app/(tabs)/index.tsx to customize this screen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="server" size={32} color="#FF9500" />
          <Text style={styles.cardTitle}>Backend API</Text>
          <Text style={styles.cardDescription}>
            Connect to your Express backend at /api endpoints
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  cardContainer: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
