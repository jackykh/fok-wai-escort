"use client";

import { Card, Col, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export const HistoryCard = ({
  time,
  event,
  img,
  color,
}: {
  time: string;
  event: string;
  img: StaticImageData;
  color: string;
}) => (
  <Card css={{ minW: "100%", h: "20rem" }} variant="shadow">
    <Card.Header
      css={{
        position: "absolute",
        zIndex: 1,
        top: 5,
      }}
    >
      <Col>
        <Row>
          <Text
            h4
            weight="bold"
            color="black"
            css={{
              backgroundColor: color,
              display: "inline-flex",
              padding: "6px",
            }}
            className="dark:text-white"
          >
            {time}
          </Text>
        </Row>
        <Row>
          <h3>
            <Text
              color="black"
              span
              css={{
                backgroundColor: color,
                padding: "6px",
                boxDecorationBreak: "clone",
              }}
              className="dark:text-white"
            >
              {event}
            </Text>
          </h3>
        </Row>
      </Col>
    </Card.Header>
    <Card.Body
      css={{
        p: 0,
        position: "relative",
      }}
    >
      <Image
        src={img}
        alt="hsitory"
        fill
        className="overflow-hidden object-cover"
      />
    </Card.Body>
  </Card>
);

export default HistoryCard;
