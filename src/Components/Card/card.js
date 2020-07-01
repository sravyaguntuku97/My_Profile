import React from "react";
import { Card, Modal,Image ,Header} from "semantic-ui-react";

const items = [
  {
    header: "Quvare",
    description:
      "ReactJs, JavaScript, NodeJs, MongoDB, Material-UI, HTML, CSS3",
    meta: "Full Stack Developer (ReactJS/ NodeJs/ UI-Developer)",
  },
  {
    header: "Project Report - May",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    meta: "ROI: 34%",
  },
  {
    header: "Project Report - June",
    description:
      "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
    meta: "ROI: 27%",
  },
];

const CardExampleGroupProps = () => {
  return (
    <React.Fragment>
      {items.map((el) => {
        return (
          <Modal
            trigger={
              <Card style={{ margin: "0rem 1rem" }}>
                <Card.Content>
                  <Card.Header content={el.header} />
                  <Card.Meta content={el.meta} />
                  <Card.Description content={el.description} />
                </Card.Content>
              </Card>
            }
          >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src="/images/avatar/large/rachel.png"
              />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>
                  We've found the following gravatar image associated with your
                  e-mail address.
                </p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        );
      })}
    </React.Fragment>
  );
};

export default CardExampleGroupProps;
