import React from "react";
import Imgs1 from "../images/hotelGlasgow1.jpg";
import Imgs2 from "../images/hotelGlasgow2.jpg";
import Imgs3 from "../images/hotelGlasgow3.jpeg";
import Imgs4 from "../images/london11.jpg";
import Imgs5 from "../images/london2.jpeg";
import Imgs6 from "../images/london33.jpg";
import Imgs7 from "../images/manchester1.jpg";
import Imgs8 from "../images/manchester31.jpg";
import Imgs9 from "../images/manchester3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PlacesToVisit() {
  return (
    <div className="places">
      <div className="glasgow">
        <Card className="card1" style={{ width: "20rem"  }}>
          <Card.Body>
            <Card.Text className="pragh">
          <p>Glasgow</p>

              Whether you’re seeking culture, nightlife, history, or just good fun,
              there are plenty of things to do in Manchester.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs1} alt="glasgow" />
          <Card.Body>
            <Card.Text
            >Gorge square, Glasgow</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://peoplemakeglasgow.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs2} alt="glasgow" />
          <Card.Body>
            <Card.Text >Clyde bridge, Glasgow</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://peoplemakeglasgow.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs3} alt="glasgow" />
          <Card.Body>
            <Card.Text>Buchanan galleries, Glasgow</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              <a
                style={{ width: "100px", color: "white" }}
                href="https://peoplemakeglasgow.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="london">
        <Card className="card1" style={{ width: "20rem" }}>

          <Card.Body>
            <Card.Text className="pragh"> 
        <p>London</p>
              Whether you’re seeking culture, nightlife, history, or just good fun,
              there are plenty of things to do in Manchester.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs4} alt="glasgow" />
          <Card.Body>
            <Card.Text>Hyde park,London</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitlondon.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs5} alt="glasgow" />
          <Card.Body>
            <Card.Text>London River</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitlondon.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs6} alt="glasgow" />
          <Card.Body>
            <Card.Text>Big Ben, London</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitlondon.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="manchester">

        <Card className="card1" style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Text className="pragh"> 
      <p>Manchester</p>
              Whether you’re seeking culture, nightlife, history, or just good fun,
              there are plenty of things to do in Manchester.</Card.Text>

          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs7} alt="glasgow" />
          <Card.Body>
            <Card.Text>canal area, manchester</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitmanchester.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs8} alt="glasgow" />
          <Card.Body>
            <Card.Text>footbridge, manchester</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitmanchester.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="card1" style={{ width: "20rem", fontSize: ".8em" }}>
          <Card.Img variant="top" src={Imgs7} alt="glasgow" />
          <Card.Body>
            <Card.Text>Albert square, manchester</Card.Text>
            <Button variant="primary" style={{ width: "100px" }}>
              {" "}
              <a
                style={{ width: "100px", color: "white" }}
                href="https://www.visitmanchester.com/"
              >
                visit
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}
