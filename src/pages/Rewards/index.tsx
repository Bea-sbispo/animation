import React from "react";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Download from "../../assets/png/gift/download.jpg";
import SbCard from "../../assets/png/gift/sb-card.jpg";
import FirstCollect from "../../assets/png/gift/stars/icon-collect-1.png";
import SecondCollect from "../../assets/png/gift/stars/icon-collect-2.png";
import ThirdCollect from "../../assets/png/gift/stars/icon-collect-3.png";
import FourthCollect from "../../assets/png/gift/stars/icon-collect-4.png";
import { RewardsLayout } from "../../layouts/Rewards";

import {
  ButtonParticipe,
  ButtonParticipeRight,
  ButtonParticipeRightFill,
  ContentSection,
  LeftArea,
  NavRewards,
  NavSection,
  RewardCard,
  RightArea,
  TabsContent,
  TabsCustom,
} from "./styles";

const rewardsData = [
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-1.png",
    text: "Benefícios exclusivos para os membros",
  },
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-2.png",
    text: "Faça o pedido e pague pelo celular",
  },
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-3.png",
    text: "Promoções e acessos antecipado às novidades",
  },
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-4.png",
    text: "Comemore seu aniversário com uma bebida de presente",
  },
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-5.png",
    text: "Estrelas em dobro e estrelas bônus",
  },
  {
    image: "src/assets/png/gift/first-section-icons/icon-app-6.png",
    text: "Aproveite seu espresso doppio na compra de cada pacote de café (250g)",
  },
];

const starsData = [
  {
    image: "src/assets/png/gift/stars/icon-stars-15.png",
    text: "15",
    event: "first",
  },
  {
    image: "src/assets/png/gift/stars/icon-stars-30.png",
    text: "30",
    event: "second",
  },
  {
    image: "src/assets/png/gift/stars/icon-stars-45.png",
    text: "45",
    event: "third",
  },
  {
    image: "src/assets/png/gift/stars/icon-stars-70.png",
    text: "70",
    event: "fourth",
  },
  {
    image: "src/assets/png/gift/stars/icon-stars-150.png",
    text: "150",
    event: "fifth",
  },
  {
    image: "src/assets/png/gift/stars/icon-stars-300-v2.png",
    text: "300",
    event: "sixth",
  },
];

const starsContent = [
  {
    image: "src/assets/png/gift/stars/cnt-stars-15.png",
    title: "Personalize sua bebida",
    text: "Deixe sua bebida ainda melhor com um shot extra de espresso, diferentes tipos de leite ou uma finalização com sua calda preferida, entre outros.",
    event: "first",
  },
  {
    image: "src/assets/png/gift/stars/cnt-stars-30.png",
    title: "Um ótimo pedido para começar o seu dia",
    text: "Um filtrado quentinho ou pão de queijo, entre outros.",
    event: "second",
  },
  {
    image: "src/assets/png/gift/stars/cnt-stars-45.png",
    title: "Curta a sua pausa com sabor",
    text: "Cafe latte ou chá verde gelado com limonada, coxinha ou donuts, entre outros.",
    event: "third",
  },
  {
    image: "src/assets/png/gift/stars/cnt-stars-70.png",
    title: "Uma pausa gostosa, opções para todos os momentos",
    text: "Frappuccino®, cappuccino, caramelo machiatto ou fatia de bolo red velvet, entre outros",
    event: "fourth",
  },
  {
    image: "src/assets/png/gift/stars/cnt-stars-150.png",
    title: "Sua bebida sempre com você",
    text: "Um pacote de café em grãos, uma caneca ou um copo reutilizável.",
    event: "fifth",
  },
  {
    image: "src/assets/png/gift/stars/cnt-stars-300.png",
    title: "Prepare seu café em casa",
    text: "Um copo ou garrafa térmica ou de acrílico.",
    event: "sixth",
  },
];

const stepsData = [
  {
    image: "src/assets/png/gift/stars/icon-step-1.png",
    text: "Crie uma conta",
    event: "first",
  },
  {
    image: "src/assets/png/gift/stars/icon-step-2.png",
    text: "Realize uma recarga",
    event: "second",
  },
  {
    image: "src/assets/png/gift/stars/icon-step-3.png",
    text: "Colecione Estrelas, ganhe Recompensas",
    event: "third",
  },
];
const stepsContent = [
  {
    image: "src/assets/png/gift/stars/icon-app-6.png",
    title: "Crie uma conta",
    text: "Criar a sua conta é rápido e fácil. Basta baixar o app Starbucks Brasil e cadastrar-se.",
    event: "first",
  },
  {
    image: "src/assets/png/gift/stars/icon-app-7.png",
    title: "Realize uma recarga",
    text: "Escolha o quanto deseja adicionar na conta e realize sua recarga. Afinal, toda hora é a hora certa para um bom café.",
    event: "second",
  },
  {
    image: "src/assets/png/gift/stars/icon-app-5.png",
    title: "Colecione Estrelas, ganhe Recompensas",
    text: "Toda vez que nos visita, você ganha Estrelas. Estrelas se transformam em Recompensas e Recompensas significam mais dos seus itens favoritos.",
    event: "third",
  },
];

const SbRewards: React.FC = () => {
  return (
    <RewardsLayout>
      <ContentSection>
        <NavSection>
          <NavRewards activeKey="/home">
            <Nav.Item>
              <Nav.Link className="text-white text-uppercase" href="/home">
                Starbucks® Rewards
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <ButtonParticipe>Participe agora</ButtonParticipe>
            </Nav.Item>
          </NavRewards>
        </NavSection>

        <Row className="gx-0">
          <LeftArea md={5}>
            <div className="c-left">
              <h1 className="c-left__title">Participar é fácil e rápido</h1>
              <div className="c-left__buttons">
                <ButtonParticipe>Participe agora</ButtonParticipe>
                <ButtonParticipe>Entrar</ButtonParticipe>
              </div>
            </div>
          </LeftArea>

          <RightArea>
            <div className="container container-right mt-5">
              <h2>Mais estrelas, mais prêmios, mais rápido</h2>
              <h5 className="mt-4">
                Diversos benefícios para você aproveitar, veja só:
              </h5>
              <Row className="mt-5">
                {rewardsData.map((item, index) => (
                  <Col lg={4} key={index}>
                    <RewardCard>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Text className="text-center">
                          {item.text}
                        </Card.Text>
                      </Card.Body>
                    </RewardCard>
                  </Col>
                ))}
                <Col md={12} className="mt-5">
                  <ButtonParticipeRight>Participe agora</ButtonParticipeRight>
                </Col>
                <Col md={12} className="mt-5">
                  <h2>Suas delícias favoritas de graça</h2>
                  <p className="mt-4">
                    Para atingir cada vez um nível maior no programa Starbucks
                    Rewards™, você precisa acumular estrelas (lembre-se que para
                    ganhar cada estrela é necessário pagar com seu Starbucks
                    Card registrado ou com seu aplicativo Starbucks).
                  </p>
                </Col>
              </Row>
            </div>
            <div className="w-100 mt-5">
              <div>
                <Tab.Container defaultActiveKey="first">
                  <div className="container d-flex justify-content-center">
                    <TabsCustom variant="pills">
                      {starsData.map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={item.event}>
                            <img
                              src={item.image}
                              style={{ height: "5.7rem", marginBottom: "2rem" }}
                            />
                            <h5 className="text-uppercase text-center">
                              {item.text}
                            </h5>
                            <h5 className="text-uppercase text-center">
                              estrelas
                            </h5>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </TabsCustom>
                  </div>

                  <TabsContent>
                    {starsContent.map((item, index) => (
                      <Tab.Pane eventKey={item.event} key={index}>
                        <Row className="d-flex justify-content-center align-items-center py-5 gx-0">
                          <Col md={5}>
                            <h2 className="mb-4">{item.title}</h2>
                            <p>{item.text}</p>
                            <p>
                              <a
                                href="https://manyplaces-p.s3-sa-east-1.amazonaws.com/starbucks/site/resgates-starbucks-rewards-jan-22.pdf#page=1"
                                target="_blank"
                                className="link-more"
                              >
                                Clique aqui
                              </a>{" "}
                              e veja os demais itens para resgate deste nível.
                            </p>
                          </Col>
                          <Col md={4}>
                            <img src={item.image} alt="" className="w-100" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                    ))}
                  </TabsContent>
                </Tab.Container>
              </div>
            </div>
            <div className="container container-right mt-5 py-5">
              <h2>Colecione estrelas toda vez que nos visitar</h2>
              <p className="my-4">
                Ao ser membro você ganha estrelas em quase tudo o que compra
                (não é válido para compras via Rappi) e essas estrelas se
                transformam em recompensas (muito deliciosas). Confira na tabela
                abaixo quantas estrelas você precisa para resgatar cada
                recompensa.
              </p>
              <ButtonParticipeRight>Participe agora</ButtonParticipeRight>

              <div className="mt-5">
                <Row className="gx-0 d-flex align-items-center">
                  <Col md={1}>
                    <img
                      src={FirstCollect}
                      alt=""
                      className="w-100"
                      style={{ maxHeight: "5rem" }}
                    />
                  </Col>
                  <Col md={10} className="ms-3">
                    <h4>Resgate bebidas, comidinhas e muito mais</h4>
                    <p>
                      Agora, você pode resgatar bebidas e itens de food, de
                      acordo com a quantidade de estrelas do nível que você
                      atingiu.
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="gx-0 d-flex align-items-center">
                  <Col md={1}>
                    <img
                      src={SecondCollect}
                      alt=""
                      className="w-100"
                      style={{ maxHeight: "5rem" }}
                    />
                  </Col>
                  <Col md={10} className="ms-3">
                    <h4>1 estrela a cada R$2,50*</h4>
                    <p>
                      Toda vez que você paga através de um Starbucks Card
                      Registrado ou app Starbucks Brasil, você ganhará 1 estrela
                      para cada R$ 2,50 gastos.
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="gx-0 d-flex align-items-center">
                  <Col md={1}>
                    <img
                      src={ThirdCollect}
                      alt=""
                      className="w-100"
                      style={{ maxHeight: "5rem" }}
                    />
                  </Col>
                  <Col md={10} className="ms-3">
                    <h4>Aproveite nossas campanhas</h4>
                    <p>
                      Sempre realizamos campanhas promocionais (por tempo
                      limitado) onde você ganha Estrelas Bônus.
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row className="gx-0 d-flex align-items-center">
                  <Col md={1}>
                    <img
                      src={FourthCollect}
                      alt=""
                      className="w-100"
                      style={{ maxHeight: "5rem" }}
                    />
                  </Col>
                  <Col md={10} className="ms-3">
                    <h4>
                      Ganhe Um Espresso Doppio na compra de um pacote de Café em
                      grãos Starbucks® (250g)
                    </h4>
                    <p>
                      Ao realizar a compra de um pacote de cafés em grãos
                      Starbucks (250g) nas lojas Starbucks Brasil mediante
                      pagamento integral com Starbucks Card cadastrado, você
                      pode solicitar a cortesia de um Espresso Doppio
                      (tradicional) no momento da compra.
                    </p>
                  </Col>
                </Row>
                <hr />
              </div>
            </div>
            <div className="w-100 mt-5">
              <div>
                <Tab.Container defaultActiveKey="first">
                  <div className="container d-flex justify-content-center">
                    <TabsCustom variant="pills">
                      {stepsData.map((item, index) => (
                        <Nav.Item key={index} style={{ maxWidth: 225 }}>
                          <Nav.Link eventKey={item.event} className="h-100">
                            <img
                              src={item.image}
                              style={{ height: "9rem", marginBottom: "2rem" }}
                            />
                            <h5 className="text-center">{item.text}</h5>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </TabsCustom>
                  </div>

                  <TabsContent>
                    {stepsContent.map((item, index) => (
                      <Tab.Pane eventKey={item.event} key={index}>
                        <Row className="d-flex justify-content-center align-items-center py-5 gx-0">
                          <Col md={4}>
                            <img src={item.image} alt="" className="w-100" />
                          </Col>
                          <Col md={5}>
                            <h2 className="mb-4">{item.title}</h2>
                            <p>{item.text}</p>
                            <ButtonParticipeRightFill>
                              Comece agora
                            </ButtonParticipeRightFill>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    ))}
                  </TabsContent>
                </Tab.Container>
              </div>
            </div>
            <div>
              <div>
                <img src={Download} alt="" className="w-100" />
              </div>
              <div className="container container-right d-flex justify-content-center py-5">
                <div>
                  <h2>Baixe o app para melhor experiência</h2>
                  <p className="mt-3 mb-4">
                    Use nosso app para pedir e pagar e então é só passar para
                    retirar seu pedido.
                  </p>
                  <ButtonParticipeRight>Baixe o app</ButtonParticipeRight>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={SbCard} alt="" className="w-100" />
              </div>
              <div className="container container-right d-flex justify-content-center py-5">
                <div>
                  <div className="mb-5">
                    <h2>Quanto mais estrelas, mais recompensas para você</h2>
                    <p className="mt-3 mb-4">
                      Aproveite tudo o que o programa Starbucks Rewards™ tem
                      para oferecer. Participar do programa é fácil. Adquira um
                      Starbucks Card e crie uma conta. Acompanhe suas estrelas
                      em tempo real através do aplicativo ou do website e nós
                      lhe avisaremos sempre que ganhar uma nova recompensa.
                    </p>
                    <ButtonParticipeRight className="me-3">
                      Participe agora
                    </ButtonParticipeRight>
                    <ButtonParticipeRight>
                      Termos & Condições
                    </ButtonParticipeRight>
                  </div>
                  <div className="mt-5">
                    <h2>Dúvidas?</h2>
                    <p className="mt-3 mb-4">
                      Queremos ajudar de todas as formas. Você pode perguntar ao
                      seu barista a qualquer hora ou já temos as dúvidas mais
                      frequentes respondidas aqui.
                    </p>
                    <ButtonParticipeRight>Clique aqui</ButtonParticipeRight>
                  </div>
                </div>
              </div>
            </div>
          </RightArea>
        </Row>
      </ContentSection>
    </RewardsLayout>
  );
};

export default SbRewards;
