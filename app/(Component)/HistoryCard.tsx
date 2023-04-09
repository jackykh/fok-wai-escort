"use client";

import {
  Card,
  Col,
  Row,
  Text,
  Button,
  Modal,
  useModal,
} from "@nextui-org/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

export interface HistoryEventType {
  year: string;
  event: string;
  description: string;
}

export const HistoryCard = ({
  event,
  img,
  buttonText,
  color,
}: {
  event: HistoryEventType;
  img: StaticImageData;
  buttonText: string;
  color: string;
}) => {
  const { setVisible, bindings } = useModal();
  const isSmall = useMediaQuery({ query: "(min-width: 960px)" });

  return (
    <>
      <Modal
        scroll
        width="90%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text size={18}>{event.event}</Text>
        </Modal.Header>
        <Modal.Body>
          <span
            className="font-sans"
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                {event.year}
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
                  {event.event}
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
        {!isSmall && (
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
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    color="secondary"
                    onPress={() => setVisible(true)}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      {buttonText}
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

export default HistoryCard;
