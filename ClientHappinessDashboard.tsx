import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface ClientHappinessData {
  customerSatisfactionScore: number;
  openSupportTickets: number;
  resolvedTickets: number;
}

const ClientHappinessDashboard: React.FC = () => {
  // Placeholder for client happiness stats (replace with actual data fetching)
  const [clientHappinessData, setClientHappinessData] = useState<ClientHappinessData>({
    customerSatisfactionScore: 85,     // Customer satisfaction score (out of 100)
    openSupportTickets: 25,            // Number of open support tickets
    resolvedTickets: 75,               // Number of resolved tickets
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Client Happiness Dashboard</Text>

      {/* Customer Satisfaction Score Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Customer Satisfaction Score</Text>
        <Text style={styles.value}>{clientHappinessData.customerSatisfactionScore}%</Text>
      </View>

      {/* Open Support Tickets Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Open Support Tickets</Text>
        <Text style={styles.value}>{clientHappinessData.openSupportTickets}</Text>
      </View>

      {/* Resolved Tickets Section */}
      <View style={styles.card}>
        <Text style={styles.label}>Resolved Tickets</Text>
        <Text style={styles.value}>{clientHappinessData.resolvedTickets}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Manage Support Tickets')}>
        <Text style={styles.buttonText}>Manage Support Tickets</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('View Customer Feedback')}>
        <Text style={styles.buttonText}>View Customer Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => alert('Generate Satisfaction Reports')}>
        <Text style={styles.buttonText}>Generate Satisfaction Reports</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ClientHappinessDashboard;
