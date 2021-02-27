import Constants from 'expo-constants';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const QUIZ_NOTIFICATION_KEY = 'Flashcards:Quiz:Daily';

export const clearLocalQuizNotification = async () => {
  await AsyncStorage.removeItem(QUIZ_NOTIFICATION_KEY);
  return Notifications.cancelAllScheduledNotificationsAsync();
};

const createQuizNotificationObject = () => ({
  title: 'Ready for a Quiz? 🤓',
  body: 'Don\'t forget to take a Quiz tody!',
  ... (Platform.OS === 'ios') ? {
    sound: true,
  } : {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

export const setLocalQuizNotification = async () => {
  const notification = JSON.parse(await AsyncStorage.getItem(QUIZ_NOTIFICATION_KEY));
  if (notification === null) {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return;
      }

      await Notifications.cancelAllScheduledNotificationsAsync();

      const tomorrow = new Date(); 
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);

      console.log(await Notifications.scheduleNotificationAsync({
        content: createQuizNotificationObject(),
        trigger: {
          type: 'daily',
          hour: 20,
          minute: 0,
          date: tomorrow,
        },
      }));

      AsyncStorage.setItem(QUIZ_NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
};
