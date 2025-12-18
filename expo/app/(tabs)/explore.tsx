import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="compass" size={48} color="#007AFF" />
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>
          Discover features and navigate your app
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Links</Text>

        <View style={styles.linkItem}>
          <Ionicons name="document-text" size={24} color="#666" />
          <View style={styles.linkText}>
            <Text style={styles.linkTitle}>Documentation</Text>
            <Text style={styles.linkDescription}>Learn about Expo and React Native</Text>
          </View>
        </View>

        <View style={styles.linkItem}>
          <Ionicons name="git-branch" size={24} color="#666" />
          <View style={styles.linkText}>
            <Text style={styles.linkTitle}>API Routes</Text>
            <Text style={styles.linkDescription}>Connect to backend endpoints</Text>
          </View>
        </View>

        <View style={styles.linkItem}>
          <Ionicons name="color-palette" size={24} color="#666" />
          <View style={styles.linkText}>
            <Text style={styles.linkTitle}>Theming</Text>
            <Text style={styles.linkDescription}>Customize app appearance</Text>
          </View>
        </View>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  linkText: {
    marginLeft: 12,
    flex: 1,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  linkDescription: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
});
