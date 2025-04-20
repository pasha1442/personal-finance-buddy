
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.bc5047e4e7fa4f8397349e11f119a73c',
  appName: 'smartspend-pocket-guardian',
  webDir: 'dist',
  server: {
    url: 'https://bc5047e4-e7fa-4f83-9734-9e11f119a73c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000
    }
  }
};

export default config;
