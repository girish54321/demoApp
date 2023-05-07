import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getSelectedUserInfo } from '../../redux/userStore/action';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Text } from 'react-native-paper';
import { goBack } from '../../navigation/NavigationService';

const SizeBox = () => {
    return (
        <View style={{ height: 24 }} />
    )
}

const SelectUserScreen = (props: any) => {
    const userData = props?.route?.params?.item
    const appDispatch = useDispatch()
    const data: any = useSelector((state: any) => state.usersReducer?.selectedUser)

    useEffect(() => {
        appDispatch(getSelectedUserInfo(userData?.id))
        props.navigation.setOptions({ title: userData?.name })
    }, [])

    return (
        <View style={styles.container}>
            <Card>
                <Card.Content>
                    <Text variant="displaySmall">{data?.name}</Text>
                    <Text variant="bodyMedium">{data?.email}</Text>
                </Card.Content>
            </Card>
            <SizeBox />
            <Card>
                <Card.Title title="Contane Info" />
                <Card.Content>
                    <Text variant="bodyLarge">{data?.phone}</Text>
                    <Text variant="bodyLarge">{data?.website}</Text>
                </Card.Content>
            </Card>
            <SizeBox />
            <Card>
                <Card.Title title="Company" />
                <Card.Content>
                    <Text variant="bodyLarge">{data?.company?.name}</Text>
                    <Text variant="bodyLarge">{data?.company?.catchPhrase}</Text>
                    <Text variant="bodyLarge">{data?.company?.bs}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={goBack}>Go back</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
    },
    selectedUserContainer: {
        backgroundColor: 'lightblue',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 14,
        color: 'gray',
    },
    selectedUserText: {
        marginTop: 20,
    },
});

export default SelectUserScreen;
