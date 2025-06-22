import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
    // Gera dinamicamente 1000 itens
    const data = Array.from({ length: 1000 }, (_, index) => ({
        id: (index + 1).toString(),
        title: `Imagem ${index + 1}`,
        image: `https://picsum.photos/400/225?random=${index + 1}`,
    }));

    type CardItem = {
        id: string;
        title: string;
        image: string;
    };

    const renderItem = ({ item }: { item: CardItem }) => (
        <TouchableOpacity activeOpacity={0.25} style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    contentFit="cover"
                    transition={500}
                />
                <View style={styles.overlay} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
        />
    );
}

const styles = StyleSheet.create({
    listContent: {
        padding: 8,
    },
    card: {
        flex: 1,
        margin: 6,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    imageContainer: {
        position: 'relative',
        height: 220,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    cardTitle: {
        position: 'absolute',
        bottom: 12,
        left: 12,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});