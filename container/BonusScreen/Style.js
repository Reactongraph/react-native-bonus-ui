import { StyleSheet } from "react-native";
import { Colors, FontWeight, fontFamily, fontSize } from "../../Utils/constant";

export const style = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 10,
    paddingTop: 18,
    paddingBottom: 14,
    marginHorizontal: 15,
    backgroundColor: Colors.grey,
    borderRadius: 15,
  },
  mainTextStyle: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.white,
    fontSize: fontSize.big,
    lineHeight: 25.5,
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
    justifyContent: "space-between",
    gap: 6,
    marginTop: 15,
    marginBottom: 11,
  },
  coinBox: {
    width: 42,
    height: 65,
    borderRadius: 11,
    paddingVertical: 8,
    backgroundColor: Colors.lightGrey1,
    alignItems: "center",
    justifyContent: "center",
  },
  coinText: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.lightGrey2,
    fontSize: fontSize.regular,
    marginBottom: 7,
    lineHeight: 21,
  },
  dayText: {
    fontWeight: FontWeight.normal,
    fontFamily: fontFamily.Regular,
    color: Colors.lightGrey,
    fontSize: fontSize.small,
    textAlign: "center",
    marginTop: 2,
    lineHeight: 15,
  },
  getBonusText: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    color: Colors.white,
    fontSize: fontSize.normal,
    lineHeight: 22,
  },
  buttonStyle: {
    maxWidth: 297,
    width: "100%",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.lightGrey1,
    marginBottom: 11,
    paddingLeft: 15,
    paddingRight: 20,
    paddingVertical: 12,
    borderRadius: 11,
  },
  taskLabel: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.medium,
    color: Colors.white,
    lineHeight: 19.5,
  },
  amountLabel: {
    fontWeight: FontWeight.regular,
    fontFamily: fontFamily.Light,
    fontSize: fontSize.normal,
    color: Colors.pink,
    lineHeight: 18,
  },
  adamountLabel: {
    fontWeight: FontWeight.bold,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.regular,
    color: Colors.pink,
    lineHeight: 21,
  },
  descriptionText: {
    fontWeight: FontWeight.regular,
    fontFamily: fontFamily.Light,
    fontSize: fontSize.small,
    color: Colors.white,
    lineHeight: 15,
  },
});
