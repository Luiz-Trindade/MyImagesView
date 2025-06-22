import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={styles.title}>
                App Demo: Demonstrações de Imagens
            </ThemedText>
            <ThemedText style={styles.subtitle}>
                Bem-vindo! Este é um app de demonstração para exibir diferentes exemplos de uso de imagens no React Native.
            </ThemedText>
            <View style={styles.imagePreview}>
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.demoImage}
                />
            </View>
            <ThemedText style={styles.info}>
                Navegue pelas abas para ver exemplos de carregamento, manipulação e exibição de imagens.
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        gap: 24,
    },
    title: {
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
    },
    imagePreview: {
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        backgroundColor: '#fff',
    },
    demoImage: {
        width: 180,
        height: 110,
        resizeMode: 'contain',
    },
    info: {
        textAlign: 'center',
        fontSize: 15,
        color: '#888',
    },
});
