import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function TabTwoScreen() {
  const targetUrl = "https://itsec-react-2509.vercel.app/lotto"; // 띄우고 싶은 웹사이트 주소
  return (
    // 1. ScrollView 제거!
    <View style={styles.container}>
      <WebView
        source={{ uri: targetUrl }}
        style={styles.webView} // webView 스타일에 flex: 1이 필수입니다.
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체를 차지하도록 설정
    paddingTop: 40,
  },
  webView: {
    flex: 1, // 컨테이너(container) 전체를 채우도록 설정
  },
  loadingIndicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
