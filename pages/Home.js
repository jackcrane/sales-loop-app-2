import React from "react";
import { Text, View } from "react-native";
import { Container, Entry, Flex, Logo, Page, Spacer } from "../components";
import { Barcode, ShareNetwork, ShoppingCart } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <Page title="Home">
      <Flex.Column>
        <Entry
          icon={<Barcode />}
          title="Scan"
          text="Open the scanner to use your camera to scan barcodes and build carts."
          onClick={() => {
            navigation.navigate("Scan");
          }}
        />
        <Entry
          icon={<ShoppingCart />}
          title="Carts"
          text="Access, manage, and share your carts."
          onClick={() => {
            navigation.navigate("Carts");
          }}
        />
        <Entry
          icon={<ShareNetwork />}
          title="Network"
          text="Open your network to manage who has access to your carts and connect more!"
          onClick={() => {
            navigation.navigate("Network");
          }}
        />
        <Entry
          icon={<Barcode />}
          title="Scan"
          text="Open the scanner to use your camera to scan barcodes and build carts."
          onClick={() => {
            navigation.navigate("Scan");
          }}
        />
        <Entry
          icon={<ShoppingCart />}
          title="Carts"
          text="Access, manage, and share your carts."
          onClick={() => {
            navigation.navigate("Carts");
          }}
        />
        <Entry
          icon={<ShareNetwork />}
          title="Network"
          text="Open your network to manage who has access to your carts and connect more!"
          onClick={() => {
            navigation.navigate("Network");
          }}
        />
        <Entry
          icon={<Barcode />}
          title="Scan"
          text="Open the scanner to use your camera to scan barcodes and build carts."
          onClick={() => {
            navigation.navigate("Scan");
          }}
        />
        <Entry
          icon={<ShoppingCart />}
          title="Carts"
          text="Access, manage, and share your carts."
          onClick={() => {
            navigation.navigate("Carts");
          }}
        />
        <Entry
          icon={<ShareNetwork />}
          title="Network"
          text="Open your network to manage who has access to your carts and connect more!"
          onClick={() => {
            navigation.navigate("Network");
          }}
        />
      </Flex.Column>
    </Page>
  );
}
