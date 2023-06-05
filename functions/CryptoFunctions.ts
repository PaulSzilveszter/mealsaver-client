import * as Crypto from 'expo-crypto';

// Function to generate a random 64-character hex string
export function generateRandomHexString() {
  // const crypto = NativeModules.crypto || NativeModules.Crypto; // Access the crypto module in React Native

  // // Generate 32 random bytes
  const randomBytes = Crypto.getRandomBytes(32);
  const hexString = randomBytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
  
  return hexString;
}

