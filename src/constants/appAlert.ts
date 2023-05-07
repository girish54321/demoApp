import { Alert } from 'react-native'

export const AppAlert = (title: string, subTitle: string) =>
  Alert.alert(
    title,
    subTitle,
    [
      {
        text: 'Ok',
      }
    ],
    { cancelable: false }
  )
