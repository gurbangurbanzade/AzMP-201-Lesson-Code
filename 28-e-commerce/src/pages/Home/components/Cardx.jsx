import React from "react";
import {
  Card,
  CardHeader,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { getDataById, patchById } from "../../../services";
import { endPoints } from "../../../services/api";

const Cardx = ({ product }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          h={100}
        />

        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>{product.category}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button
            onClick={async () => {
              let user = await getDataById(endPoints.users, "1");

              let findProd = user.basket.find((el) => el.id == product.id);

              if (findProd) {
                findProd.count += 1;
              } else {
                let obj = {
                  id: product.id,
                  count: 1,
                };
                user.basket.push(obj);
              }

              await patchById(endPoints.users, "1", {
                basket: user.basket,
              });

              // console.log(user.basket);

              // .then((res) => res.basket)
              // .then((basket) => {
              //   console.log("basket", basket);
              //   let arr = [];

              //   basket.forEach((el) => {
              //     if (basket.find((el) => el.id == product.id)) {
              //       console.log("sadfsghasdasdas");
              //       el.count++;
              //       arr.push(el);
              //     } else {
              //       let obj = {
              //         id: product.id,
              //         count: 1,
              //       };
              //       arr.push(obj);
              //     }
              //   });
            }}
            variant="ghost"
            colorScheme="blue"
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cardx;
