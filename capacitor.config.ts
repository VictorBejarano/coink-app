import { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "victorbejarano.coinkapp.com",
  appName: "Coink App",
  bundledWebRuntime: false,
  npmClient: "npm",
  webDir: "www",
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#0000ff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
