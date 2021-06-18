import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import PartyImg from "../../assets/images/party.jpg";

import "./style.css";

class Party extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='align-items-center'>
            <Col className='col-lg-6 mt-5'>
              <div id='headingGroup' className='text-center d-none d-lg-block'>
                <h2> Fa din orice iesire un eveniment</h2>
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
              <img className='img-fluid' src={PartyImg} alt='Party' />
            </Col>
          </Row>
        </Container>

        <div className='packets'>
          <h2>Pachete optionale</h2>
          <ul className='list-unstyled'>
            <li>Candy bar- 3,5 euro/persoana</li>
            <li>Fotograf/videograf – prin casa propie de evenimente</li>
            <li>Dansuri de nunta- 120 lei/sedinta</li>
            <li>Aranjamente florale</li>
            <li>Masina de epoca </li>
            <li>Luna de miere</li>
            <li>Inghetata thailandeza</li>
            <li>DJ</li>
            <li>Zane botez​</li>
          </ul>
          <div className='panel-footer col-md-4 col-sm-4 offset-md-4'>
            <a className='btn btn-lg btn-block' href='#'>
              Rezerva!
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Party;
