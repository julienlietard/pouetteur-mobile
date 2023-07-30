import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import authStyle from '../styles/authStyle';
import Button from '../components/Button';
import UserData from '../utils/data/UsersData';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        const user = UserData.find(
            (u) => u.pseudo === usernameOrEmail || u.email === usernameOrEmail
        );

        if (!user) {
            setErrorMessage("Nom d'utilisateur ou e-mail incorrect");
            return;
        }

        if (user.password !== password) {
            setErrorMessage('Mot de passe incorrect');
            return;
        }

        setErrorMessage('');
        navigation.navigate('Home', { user });
    };

    return (
        <View style={authStyle.container}>
            <Text style={authStyle.title}>Connexion</Text>
            {errorMessage ? <Text style={authStyle.errorMessage}>{errorMessage}</Text> : null}
            <TextInput
                style={authStyle.input}
                placeholder="Nom d'utilisateur ou e-mail"
                value={usernameOrEmail}
                onChangeText={(text) => setUsernameOrEmail(text)}
            />
            <TextInput
                style={authStyle.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Se connecter" onPress={handleLogin} />
            <Text style={authStyle.link} onPress={() => navigation.navigate('RegisterForm')}>
                Pas encore de compte ? Inscrivez-vous ici
            </Text>
        </View>
    );
};

export default LoginForm;
