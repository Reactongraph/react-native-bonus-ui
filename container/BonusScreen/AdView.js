import { useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Coin from "../../assets/coin.svg";
import { adBonusAmount } from "./data";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./Style";
import { listChecking } from "../../Utils/helper";
import { Colors } from "../../Utils/constant";

export const AdView = () => {
  const [getTaskList, setGetTaskList] = useState([]);
  const isIncluded = useCallback(
    (id) => {
      return getTaskList?.includes(id);
    },
    [getTaskList]
  );
  return (
    <View style={{ marginVertical: 15 }}>
      {adBonusAmount?.map((item, ind) => {
        return (
          <View key={`${item}_${ind}`} style={style.listContainer}>
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Coin width={28} height={28} />
              <Text style={style.adamountLabel}>+ {item} Bonus</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                const data = listChecking(getTaskList, ind);
                setGetTaskList(data);
              }}
            >
              <LinearGradient
                colors={[Colors.blueGradient, Colors.pinkGradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[style.buttonStyle, { width: 62, height: 20 }]}
              >
                <Text style={style.getBonusText}>
                  {isIncluded(ind) ? "Claim" : "Watch"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
