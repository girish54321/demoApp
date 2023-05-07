
import React, { useEffect } from "react"
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import setHomeImages from "../../redux/userStore/action"
import { EmptyScreen, LoadingView } from "../../constants/loadingView"
import { navigate } from "../../navigation/NavigationService"
import { Route } from "../../constants/Route"
import { Divider, List } from "react-native-paper"

export const HomeScreen = (props: any) => {
    const appDispatch = useDispatch()
    const data: Array<any> = useSelector((state: any) => state.usersReducer?.users)
    const isLoading: boolean = useSelector((state: any) => state.usersReducer.isLoading)

    useEffect(() => {
        appDispatch(setHomeImages())
        props.navigation.setOptions({ title: "Users" })

    }, [])

    const renderItem = ({ item }) => (
        <View>
            <List.Item
                onPress={() => {
                    navigate(Route.SELECTED_USER_SCREEN, { item })
                }}
                title={item.name}
                description={item.email}
            />
            <Divider />
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {isLoading && !data?.length ? <LoadingView /> :
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data || []}
                    ListEmptyComponent={
                        <EmptyScreen message={"Loading"} />
                    }
                    renderItem={renderItem}
                />
            }
        </View>
    )
}
