import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function CarouselCard() {
  const width = Dimensions.get("window").width;

  // Define your text data
  const texts = [
    {
      id: 1,
      img: require("../assets/images/1.png"),
      title: "Take Control of Your Finances",
      description: " Monitor your accounts and investments in one place",
    },
    {
      id: 2,
      img: require("../assets/images/2.png"),
      title: "Discover New Opportunities",
      description: " Browse our curated selection of investment opportunities",
    },
    {
      id: 3,
      img: require("../assets/images/3.png"),
      title: "Adjust your portfolio ",
      description:
        "Receive notifications about upcoming auctions and new listings.",
    },
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <View style={{ height: 560 }}>
      <Carousel
        loop
        width={width}
        autoPlay={true}
        data={texts}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.carouselItem}>
            <View style={{ borderRadius: 16 }}>
              <Image
                source={item.img}
                style={{
                  width: width,
                  height: 450,
                  borderRadius: 16,
                  objectFit: "cover",
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: "Poppins-Bold",
                  color: "#0D1420",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  color: "#6B7280",
                  textAlign: "center",
                  lineHeight: 24,
                  paddingHorizontal: 40,
                }}
              >
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Custom Pagination Indicators */}
      <View style={styles.paginationContainer}>
        {texts.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: activeSlide === index ? 1 : 0.8 }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 36,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 40,
    textAlign: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  description: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 35,
    marginTop: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0092DD",
    marginHorizontal: 4,
  },
});

export default CarouselCard;
