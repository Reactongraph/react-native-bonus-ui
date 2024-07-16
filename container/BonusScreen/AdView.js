import { useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import coinImage from "../../assets/coin.png";
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
            <View style={{ flex: 1 }}>
              <Image source={coinImage} style={{ width: 28, height: 28 }} />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={style.adamountLabel}>+ {item} Bonus</Text>
            </View>
            <TouchableOpacity
              style={{ flex: 1.5 }}
              onPress={() => {
                const data = listChecking(getTaskList, ind);
                setGetTaskList(data);
              }}
            >
              <LinearGradient
                colors={[Colors.blueGradient, Colors.pinkGradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[style.buttonStyle, { width: 62 }]}
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
