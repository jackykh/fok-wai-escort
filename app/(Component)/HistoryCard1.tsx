"use client";

import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import fuzhou from "@/public/history/fuzhou.jpg";

export const HistoryCard = ({ dict }: { dict: any }) => (
  <Card css={{ minW: "100%", h: "20rem" }} variant="shadow">
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={16} weight="bold" transform="uppercase" color="black">
          {dict.history.foundedIn}
        </Text>
        <Text h2 color="black">
          {dict.history.location}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body
      css={{
        p: 0,
        position: "relative",
      }}
    >
      <Image
        src={fuzhou}
        alt="fuzhou"
        fill
        className="overflow-hidden object-cover"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row align="center">
        <Col>
          <Text color="black" size={14} weight="bold" transform="uppercase">
            {dict.history.subtitle}
          </Text>
        </Col>

        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                {dict.learnMore}
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default HistoryCard;
