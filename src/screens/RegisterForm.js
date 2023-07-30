import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../components/Button';
import authStyle from '../styles/authStyle';

const RegisterForm = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username || !password || !confirmPassword) {
            setError('Tous les champs doivent être renseignés.');
        }
        else if (!isValidEmail(username)) {
            setError("L'identifiant doit être un e-mail valide.");
        }
        else if (password !== confirmPassword) {
            setError('Le mot de passe doit être identique à la confirmation.');
        } else {
            console.log('Inscription avec :', username, password);
        }
    };

    const isValidEmail = (email) => {
        // Vérification du format de l'adresse e-mail via regex
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    return (
        <View style={authStyle.container}>
            <Text style={authStyle.title}>Inscription</Text>
            <TextInput
                style={authStyle.input}
                placeholder="Nom d'utilisateur ou e-mail"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={authStyle.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput
                style={authStyle.input}
                placeholder="Confirmer le mot de passe"
                secureTextEntry
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
            />
            {error ? <Text style={authStyle.error}>{error}</Text> : null}
            <Button title="S'inscrire" onPress={handleRegister} />
            <Text style={authStyle.link} onPress={() => navigation.navigate('LoginForm')}>
                Déjà un compte ? Connectez-vous ici
            </Text>
        </View>
    );
};

export default RegisterForm;
