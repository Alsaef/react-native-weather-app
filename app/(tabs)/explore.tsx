import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const teamMembers = [
  {
    id: "1",
    name: "Elon Musk",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
    skill: "SpaceX, Tesla, AI Research",
  },
  {
    id: "2",
    name: "Sundar Pichai",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Sundar_Pichai_-_2018_%28cropped%29.jpg",
    skill: "Cloud Computing, AI, Business Strategy",
  },
  {
    id: "3",
    name: "Satya Nadella",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Satya_Nadella_in_2017.jpg",
    skill: "Software Development, AI, Leadership",
  },
  {
    id: "4",
    name: "Tim Cook",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tim_Cook_%282022%29.jpg",
    skill: "Business Strategy, Supply Chain, Product Design",
  },
  {
    id: "5",
    name: "Mark Zuckerberg",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg",
    skill: "Social Media, AI, Metaverse",
  },
];

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Team</Text>
      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid layout with 2 columns
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.skill}>{item.skill}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    margin: 8,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Shadow effect for Android
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  skill: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 4,
  },
});

export default explore;