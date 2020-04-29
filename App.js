import React, { useRef, useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  BackHandler,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Platform,
  Dimensions
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const webViewRef = useRef();
  const [refreshPage, changerRefreshPage] = useState(false);

  useEffect(() => {
    const goBack = () => {
      webViewRef.current.goBack();
      return true;
    };
    BackHandler.addEventListener("hardwareBackPress", goBack);
    return  () => { 
      BackHandler.removeEventListener("hardwareBackPress", goBack);
    }
  }, [webViewRef]);

  const onRefresh = () => {
    webViewRef.current.reload();
  };

  const onMessage = e => {
    try {
      const { eventType, data } = JSON.parse(e.nativeEvent.data);
      switch (eventType) {
        case "refreshPage":
          changerRefreshPage(data.refreshPage);
          break;
        default:
          break;
      }
    } catch (error) {
      return;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        scrollEnabled={false}
        refreshControl={
          <RefreshControl
            enabled={refreshPage}
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
      >
        <WebView
          source={{
            uri: "https://vteme.life",
            // uri: "http://192.168.0.101:3000",
            "Accept-Language": navigator.language,
            "User-Agent": Platform.OS
          }}
          ref={webViewRef}
          onMessage={onMessage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
