import { StyleSheet } from "react-native";
import { Colors, FontWeight, fontFamily, fontSize } from "../../Utils/constant";

export const style = StyleSheet.create({
  viewContainer: {
    padding: "5%",
    marginHorizontal: "5%",
    backgroundColor: Colors.grey,
    borderRadius: 15,
  },
  mainTextStyle: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.white,
    fontSize: fontSize.big,
  },
  subTextStyle: {
    fontWeight: FontWeight.normal,
    fontFamily: fontFamily.Regular,
    color: Colors.lightGrey,
    fontSize: fontSize.normal,
  },
  coinContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  coinBox: {
    width: 42,
    height: 65,
    borderRadius: 11,
    backgroundColor: Colors.lightGrey1,
    alignItems: "center",
    justifyContent: "center",
  },
  coinText: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.lightGrey2,
    fontSize: fontSize.regular,
    marginBottom: 10,
  },
  dayText: {
    fontWeight: FontWeight.normal,
    fontFamily: fontFamily.Regular,
    color: Colors.lightGrey,
    fontSize: fontSize.small,
    marginTop: 5,
  },
  getBonusText: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.white,
    fontSize: fontSize.regular,
  },
  buttonStyle: {
    width: "90%",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGrey1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 11,
  },
  taskLabel: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.medium,
    color: Colors.white,
  },
  amountLabel: {
    fontWeight: FontWeight.regular,
    fontFamily: fontFamily.Light,
    fontSize: fontSize.normal,
    color: Colors.pink,
  },
  adamountLabel: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.regular,
    color: Colors.pink,
  },
  descriptionText: {
    fontWeight: FontWeight.regular,
    fontFamily: fontFamily.Light,
    fontSize: fontSize.small,
    color: Colors.white,
  },
});
