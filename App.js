import React from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ flexDirection: "row" }}>
          {/* <Checkbox style={styles.checkbox} checked={agreedChecked} /> */}
          <View
            style={{
              flex: 1,
              marginTop: 120,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: "#757575", lineHeight: 23 }}>
              Yes, I agree to using this payment method for automatic monthly
              charges.{" "}
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={{ height: 18, width: 18 }}
                  source={require("./assets/icon.png")}
                />
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
