import AsyncStorage from '@react-native-async-storage/async-storage';

export const ASYNC_STORAGE_CACHE_DATA_KEY = 'FLASHCARDS:DATA:CACHE';

export const reduxSubscriber = (getState) => {
  const storeData = getState();
  console.debug(`CACHING STORE STATE`);
  return AsyncStorage.setItem(ASYNC_STORAGE_CACHE_DATA_KEY, JSON.stringify(storeData));
};

