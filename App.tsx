import React from 'react';
import {View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';


const URI = 'https://ed.ted.com/lessons/ai-s-single-point-of-failure-rob-toews'

const injectedJS = `
    (function() {
      document.addEventListener('scroll', () => {
          console.log('scrollY = ', window.scrollY)
      });
      
      document.addEventListener('fullscreenchange', () => {
          console.log('full screen change scrollY = ', window.scrollY)
      })
      
    })();
    true; // Required for React Native WebView
  `;

function App(): React.JSX.Element {

  return (
  <View style={styles.container}>
    <WebView
      source={{
      uri: URI,
    }}

      injectedJavaScript={injectedJS}
      allowsFullscreenVideo
      webviewDebuggingEnabled
      style={styles.container}
    />
  </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1
}
});

export default App;
