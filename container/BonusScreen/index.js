import { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { CoinView } from "./CoinView";
import { TaskView } from "./TaskView";
import { AdView } from "./AdView";
import { formatTime } from "../../Utils/helper";
import { Colors, fontSize } from "../../Utils/constant";
import backgoundImage from "../../assets/bounsBackground.png";
import { Description } from "./data";
import { style } from "./Style";
import LeftIcon from "../../assets/left.svg";

const BonusScreen = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState({ hours: 24, minutes: 0, seconds: 0 });

  const stopTimer = () => {
    setStartTimer(false);
  };
  const updateTime = () => {
    setTime((prevTime) => {
      let { hours, minutes, seconds } = prevTime;

      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            stopTimer();
          }
        }
      }

      return { hours, minutes, seconds };
    });
  };

  // Start the timer when the component mounts
  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer]);

  return (
    <ScrollView>
      <ImageBackground source={backgoundImage} style={{ paddingBottom: 24 }}>
        <View
          style={{
            justifyContent: "center",
            marginLeft: 19,
            marginTop: 105,
            marginBottom: 49,
          }}
        >
          {/* <Image source={back} style={{ width: 14, height: 14 }} /> */}
          <LeftIcon width={14} height={14} />
          <View style={{ marginTop: 17, marginLeft: 10 }}>
            <Text style={style.mainTextStyle}>Your Bonus:</Text>
            <Text
              style={[style.mainTextStyle, { fontSize: 19, lineHeight: 28.5 }]}
            >
              20
            </Text>
          </View>
        </View>
        <View style={style.viewContainer}>
          <View style={{ paddingHorizontal: 4 }}>
            <Text style={style.mainTextStyle}>Daily Check-in</Text>
            <Text style={style.subTextStyle}>Earn rewards for check-in</Text>
          </View>

          <CoinView />
          <TouchableOpacity
            disabled={startTimer}
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              setStartTimer(true);
            }}
          >
            <LinearGradient
              colors={[Colors.blueGradient, Colors.pinkGradient]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={style.buttonStyle}
            >
              <Text
                style={[
                  style.getBonusText,
                  { fontSize: fontSize.regular, lineHeight: 21 },
                ]}
              >
                {startTimer
                  ? formatTime(time.hours, time.minutes, time.seconds)
                  : "Get Daily Bonus"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ marginTop: 16, marginBottom: 11 }}>
            <View style={{ paddingHorizontal: 4 }}>
              <Text style={style.mainTextStyle}>Task for Beginners</Text>
              <Text style={style.subTextStyle}>Only one chance</Text>
            </View>
            <TaskView />
          </View>
          <View>
            <View style={{ paddingHorizontal: 4 }}>
              <Text style={style.mainTextStyle}>Watch Ads, Earn Bonus</Text>
              <Text style={style.subTextStyle}>
                Watch all Ads, get extra rewards{" "}
                <Text style={{ color: Colors.pink1 }}>+ 20 Bonus</Text>
              </Text>
            </View>

            <AdView />
          </View>
        </View>
        <View
          style={{
            marginTop: 34,
            marginBottom: 4,
            marginLeft: 29,
            marginRight: 20,
          }}
        >
          <Text style={style.taskLabel}>Description</Text>
          <View style={{ gap: 11, marginTop: 4 }}>
            {Description?.map((item) => {
              return (
                <Text style={style.descriptionText} key={item}>
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default BonusScreen;
