import { useTheme } from "styled-components/native";
import {
  Container,
  Entry,
  Flex,
  Page,
  Spacer,
  Typography,
} from "../../components";

export const About = () => {
  // const theme = useTheme();
  return (
    <Page invisible>
      <Flex.Column>
        <Typography.H2>What is SalesLoop?</Typography.H2>
        <Typography.Text>
          SalesLoop is a software platform designed to help companies optimize
          the ordering and supply chain process while retaining existing
          infrastructure, experience, relationships, and workflows.
        </Typography.Text>
        <Spacer />
        <Typography.H2>How does it work?</Typography.H2>
        <Typography.Text>
          As a sales rep, you can use SalesLoop to create orders for your
          customers and send them up the chain to existing internal connections.
          Creating an order from a customer's warehouse or office may look like
          you visiting the customer's facility, scanning barcodes of products
          that need ordering, adding them to a cart with a quantity, and finally
          sending that cart to your manager or distributor.
        </Typography.Text>
        <Typography.Text>
          Your manager or distributor will receive the order and can then review
          it and confirm it with internal systems, then leave comments, approve,
          or reject your order. You can then view the status of your order and
          update or fix it as needed. From there, your manager or distributor
          can register the order in the same way they already do, and the order
          will be fulfilled as normal.
        </Typography.Text>
        <Spacer />
        <Typography.H2>Who do I contact with issues?</Typography.H2>
        <Typography.Text>
          If you have any issues with the app's intended features, including app
          access like logging in, app content like internal connections and
          product data, please contact your manager or distributor.
        </Typography.Text>
        <Typography.Text>
          If you have any issues with the app's functionality, including bugs,
          visual issues, crashes, or other technical issues, please contact the
          SalesLoop team.
        </Typography.Text>
      </Flex.Column>
    </Page>
  );
};
