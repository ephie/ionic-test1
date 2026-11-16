import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.angular.web.ios.android.sidemenu.test',
  appName: 'ionic-angular-web-ios-android-sidemenu-test',
  webDir: 'www',
  plugins: {
    // Native HTTP avoids webview CORS/mixed-content limits when calling the http dev API.
    CapacitorHttp: { enabled: true }
  }
};

export default config;
