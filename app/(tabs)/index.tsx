import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Loading from '@/components/Loading';

interface WeatherCardProps {
  location: string;
  temperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.location}>{location}</Text>
      <Ionicons name="partly-sunny" size={50} color="white" />
      <Text style={styles.temperature}>{temperature.toFixed(0)}°C</Text>
    </View>
  );
};

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<{ location: string; temperature: number} | null>(null);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  },[])
  const fetchWeather = () => {
    // Replace with actual API call
    if (!city.trim()) {
      alert("City is required!");
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38ac41421a83143fa944eeb737309a14`)
    .then(res=>res.json())
    .then(data=>{
      if (data.cod === "404") {
        console.error("City not found. Please enter a valid city name.");
      }
     else{
      setWeather({
        location: city || 'New York',
        temperature: data.main.temp - 273.15,
       
      })
      console.log(data.main);
     }
    })
  };

  if (loading) {
    return(
         <Loading/>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        placeholderTextColor="#ddd"
        value={city}
        onChangeText={setCity}
        
        
      />
      <TouchableOpacity style={styles.button} onPress={fetchWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {weather && <WeatherCard {...weather} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    backgroundColor: '#333',
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  temperature: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  condition: {
    fontSize: 18,
    color: 'white',
  },
});

export default WeatherApp;
