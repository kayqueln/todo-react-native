import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tasks)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const newColorTheme = {
    accent: {
      "50": "#f6f4fe",
      "100": "#eeebfc",
      "200": "#e0dbf9",
      "300": "#c9bdf5",
      "400": "#ad98ed",
      "500": "#926de5",
      "600": "#824ed9",
      "700": "#7743c7",
      "800": "#5f32a5",
      "900": "#4f2b87",
      "950": "#311a5b",
    },
  };

  const theme = extendTheme({
    colors: newColorTheme,
    components: {
      Button: {
        variants: {
          rounded: ({ colorScheme }: { colorScheme: any }) => {
            return {
              bg: `${colorScheme}.500`,
            };
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tasks)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </NativeBaseProvider>
  );
}
