import { View, Text, Image } from "react-native";

import Coin from "../../assets/coin.svg";
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

              <Coin width={18} height={18} style={{ marginBottom: 3 }} />
            </View>
            <Text style={style.dayText}>Day {ind + 1}</Text>
          </View>
        );
      })}
    </View>
  );
};
