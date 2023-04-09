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
import fuzhou from "@/public/history/fuzhou.jpg";
import { useMediaQuery } from "react-responsive";

export const HistoryCard = ({ dict }: { dict: any }) => {
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
          <Text size={18}>{dict.history.subtitle}</Text>
        </Modal.Header>
        <Modal.Body>
          <span
            className="font-sans"
            dangerouslySetInnerHTML={{ __html: dict.history.origin }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                <Text
                  color="black"
                  size={14}
                  weight="bold"
                  transform="uppercase"
                >
                  {dict.history.subtitle}
                </Text>
              </Col>

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
                      {dict.learnMore}
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
