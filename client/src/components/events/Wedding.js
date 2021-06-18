import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import WeddingImg from "../../assets/images/wedding.jpg";

import "./style.css";

class Wedding extends Component {
  render() {
    return (
      <Fragment>
        <div className='salon'>
          <h2>Avantajele Saloanelor noastre</h2>
          <ul className='list-unstyled'>
            <li>Fara taxe ascunse</li>
            <li>Fara chirie sala</li>
            <li>Bucatarie proprie</li>
            <li>Locuri de parcare</li>
            <li>Gradina amenajata </li>
            <li>Generator</li>
            <li>Meniuri pentru vegetarieni</li>
            <li>Degustare gratuita</li>
            <li>Servicii wedding planner​</li>
          </ul>
        </div>

        <Container>
          <Row className='align-items-center'>
            <Col className='col-lg-6 mt-5'>
              <div id='headingGroup' className='text-center d-none d-lg-block'>
                <h2> De ce sa vii la noi pentru nunta?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  minima fugit illum rerum corrupti ut fuga totam nisi eius
                  itaque, quis non consequuntur nobis facilis odio ducimus, unde
                  quam? Non? Dicta vitae recusandae excepturi quia nisi a quos
                  blanditiis. Ratione, ab error, voluptatibus expedita quibusdam
                  doloremque asperiores consectetur tempore qui, ex nihil eius
                  facilis beatae aut rem accusantium incidunt in! Dignissimos
                  voluptate qui, excepturi laboriosam voluptates illum deleniti,
                  dolorum aperiam eius a voluptatem nostrum aut deserunt
                  consequatur ducimus temporibus minus dolor eaque consectetur
                  iste sed dicta vero dolore! Iusto, qui! Veniam, repudiandae
                  neque expedita debitis facere sapiente. Inventore, cum
                  tenetur. Accusamus aperiam cupiditate, exercitationem iusto
                  non, vitae tempora ut consectetur vero a laudantium qui
                  aliquam necessitatibus, unde iure similique rem. Quis eos id
                  doloribus voluptatum autem tenetur voluptatem repellat ut rem
                  corporis! Illum corrupti cum assumenda fugiat autem, ullam
                  commodi eveniet laboriosam, quas possimus accusantium ipsa
                  corporis, exercitationem sint molestiae!
                </p>
              </div>
            </Col>
            <Col className='col-lg-6'>
              <img className='img-fluid' src={WeddingImg} alt='Nunta' />
            </Col>
          </Row>

          <Row>
            <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
              <div className='panel-heading'>
                <h3>Nunta Basic</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>55 Euro</strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'> +10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <a className='btn btn-lg btn-block' href='#'>
                  Rezerva!
                </a>
              </div>
            </Col>
            <Col className="col-md-4 col-sm-4 text-center panel panel-pricing'">
              <div className='panel-heading'>
                <h3>Nunta Premium</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>65 Euro </strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'>+10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <a className='btn btn-lg btn-block' href='#'>
                  Rezerva!
                </a>
              </div>
            </Col>
            <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
              <div className='panel-heading'>
                <h3>Nunta Deluxe</h3>
              </div>
              <div className='panel-body text-center'>
                <p>
                  <strong>75 Euro </strong>
                </p>
              </div>
              <ul className='list-group text-center'>
                <li className='list-group-item'> +10% taxa servicii</li>
              </ul>
              <div className='panel-footer'>
                <a className='btn btn-lg btn-block' href='#'>
                  Rezerva!
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Wedding;
