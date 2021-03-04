import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
import moment from "moment";

const CardItem = ({
  title,
  subtitle,
  image,
  date,
  author,
  link,
  mode = "normal",
}) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${!image ? "no-image" : ""}`}>
        <Card.Header className="d-flex flex-row">
          <div>
            {mode === "placeholder" ? (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  Placeholder Title
                </Card.Title>
                <Card.Text className="card-date">Placeholder Date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="card-main-title font-weight-bold">
                  {title}
                </Card.Title>
                <Card.Text className="card-date">
                  {moment(date).format("LLL")}
                </Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === "placeholder" ? (
            <div className="image-placeholder" />
          ) : (
            image && (
              <Card.Img
                src={urlFor(image).height(300).crop("center").fit("clip").url()}
                alt="Card image cap"
              />
            )
          )}
        </div>
        <Card.Body>
          {mode === "placeholder" ? (
            <>
              <Card.Text>Placeholder Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
