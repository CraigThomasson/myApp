import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.craig.test_app',
  appName: 'test-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
