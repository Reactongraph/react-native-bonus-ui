import { useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { listChecking } from "../../Utils/helper";
import { Colors } from "../../Utils/constant";
import coinImage from "../../assets/coin.png";
import { TaskList } from "./data";
import { style } from "./Style";

export const TaskView = () => {
  const [getTaskList, setGetTaskList] = useState([]);
  const isIncluded = useCallback(
    (id) => {
      return getTaskList?.includes(id);
    },
    [getTaskList]
  );
  return (
    <View style={{ marginTop: 15 }}>
      {TaskList?.map((item, ind) => {
        const { label, bonusAmount } = item || "";
        return (
          <View key={label} style={style.listContainer}>
            <View style={{ flex: 1 }}>
              <Image source={coinImage} style={{ width: 28, height: 28 }} />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={style.taskLabel}>{label}</Text>
              <Text style={style.amountLabel}>+ {bonusAmount} Bonus</Text>
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
                style={[
                  style.buttonStyle,
                  { width: isIncluded(ind) ? 55 : 50 },
                ]}
              >
                <Text style={style.getBonusText}>
                  {isIncluded(ind) ? "Claim" : "Get"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
