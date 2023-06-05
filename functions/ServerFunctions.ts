import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post, SERVER_URL } from '../constants/ServerConstants';

// Helper function to update storage
export async function setValue(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error storing ${key}:`, error);
  }
}

// Helper function to retrieve value from storage
export async function getValue<T>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return null;
  }
}

export async function setAccessToken(token: string) {
  await setValue('accessToken', token);
}

export async function getAccessToken() {
  return await getValue('accessToken');
}

export async function setRefreshToken(token: string) {
  await setValue('refreshToken', token);
}

export async function getRefreshToken() {
  return await getValue('refreshToken');
}

export async function registerNewUser(username: string, email: string, password: string) {
  const url = `${SERVER_URL}users/register`;
  console.log(SERVER_URL)
  const payload = {
    username: username,
    email: email,
    password: password,
  };
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    console.log(res);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function loginUser(username: string, email: string, password: string) {
  const url = `${SERVER_URL}users/login`;

  const payload = {
    username: username,
    email: email,
    password: password,
  };
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log(data);
    await setAccessToken(data.accessToken);
    await setRefreshToken(data.refreshToken);

    console.log('ACCESS TOKEN TEST', await getAccessToken());
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addNewProduct(productType: string, pricePerUnit: number, units: number, location: string) {
  const url = `${SERVER_URL}products/add`;
  const accessToken = await getAccessToken();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const post = {
    productType: productType,
    pricePerUnit: pricePerUnit,
    units: units,
    location: location,
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ post: post }),
    });

    if (res.ok) {
      const products = await res.json();
      console.log('New product added successfully');
      return products;
    } else {
      throw new Error('Failed to add new product');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllPosts():Promise<Array<Post>> {
  const url = `${SERVER_URL}products/posts`;
  const accessToken = await getAccessToken();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const posts = await response.json();
      return posts;
    } else {
      throw new Error('Failed to retrieve posts');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
