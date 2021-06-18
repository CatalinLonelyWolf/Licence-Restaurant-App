import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../../assets/styles/style.css";
import BaptismImg from "../../assets/images/baptism.jpg";

class Baptism extends Component {
  render() {
    return (
      <Container>
        <Row className='align-items-center'>
          <Col className='col-lg-6'>
            <img className='img-fluid' src={BaptismImg} alt='Botez' />
          </Col>
          <Col className='col-lg-6 mt-5'>
            <div id='headingGroup' className='text-center d-none d-lg-block'>
              <h2> Atunci cand copilul tau devine crestin </h2>
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
                neque expedita debitis facere sapiente. Inventore, cum tenetur.
                Accusamus aperiam cupiditate, exercitationem iusto non, vitae
                tempora ut consectetur vero a laudantium qui aliquam
                necessitatibus, unde iure similique rem. Quis eos id doloribus
                voluptatum autem tenetur voluptatem repellat ut rem corporis!
                Illum corrupti cum assumenda fugiat autem, ullam commodi eveniet
                laboriosam, quas possimus accusantium ipsa corporis,
                exercitationem sint molestiae!
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
            <div className='panel-heading'>
              <h3>Botez Basic</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>35 Euro</strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'> +5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <a className='btn btn-lg btn-block' href='#'>
                Rezerva!
              </a>
            </div>
          </Col>
          <Col className="col-md-4 col-sm-4 text-center panel panel-pricing'">
            <div className='panel-heading'>
              <h3>Botez Premium</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>45 Euro </strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'>+5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <a className='btn btn-lg btn-block' href='#'>
                Rezerva!
              </a>
            </div>
          </Col>
          <Col className='col-md-4 col-sm-4 text-center panel panel-pricing'>
            <div className='panel-heading'>
              <h3>Botez Deluxe</h3>
            </div>
            <div className='panel-body text-center'>
              <p>
                <strong>55 Euro </strong>
              </p>
            </div>
            <ul className='list-group text-center'>
              <li className='list-group-item'> +5% taxa servicii</li>
            </ul>
            <div className='panel-footer'>
              <a className='btn btn-lg btn-block' href='#'>
                Rezerva!
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Baptism;
