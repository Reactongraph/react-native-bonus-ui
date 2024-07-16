import { View, Text, Image } from "react-native";

import coinImage from "../../assets/coin.png";
import { dailyCoinEarn } from "./data";
import { style } from "./Style";

export const CoinView = () => {
  return (
    <View style={style.coinContainer}>
      {dailyCoinEarn?.map((item, ind) => {
        return (
          <View key={`${item}_${ind}`}>
            <View style={style.coinBox}>
              <Text style={style.coinText}>+{item}</Text>
              <Image source={coinImage} style={{ width: 18, height: 18 }} />
            </View>
            <Text style={style.dayText}>Day {ind + 1}</Text>
          </View>
        );
      })}
    </View>
  );
};
