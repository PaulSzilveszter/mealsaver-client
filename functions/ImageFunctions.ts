import * as ImagePicker from 'expo-image-picker';


export const pickImageAsync = async (hook:any) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
        hook(result.assets[0].uri);
      console.log(result);

    } else {
      alert('You did not select any image.');
    }
  };