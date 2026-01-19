import {
  GoogleSignin,
  GoogleSigninButton,
  isSuccessResponse,
  NativeModuleError,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { supabase } from 'lib/supabase';

const GoogleBtn = () => {
  GoogleSignin.configure({ webClientId: '' });

  return (
    <>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: response.data.idToken!,
              });
              console.log(error, data);
            }
          } catch (err) {
            const error = err as NativeModuleError;
            if (error.code === statusCodes.IN_PROGRESS) {
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            } else {
            }
          }
        }}
      />
    </>
  );
};

export default GoogleBtn;
