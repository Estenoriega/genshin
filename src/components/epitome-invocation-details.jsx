import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import DetailsBox from "./details-components/details-box";
import StarsBar from "./details-components/stars-bar";
import SubheadingSeparator from "./details-components/subheading-separator";
import EventDurationHeading from "./details-components/event-duration-heading";
import Table from "./details-components/table";
import Title from "./details-components/title";
import EpitomeInvocation from "../models/epitome-invocation";

export default function EpitomeInvocationDetails() {
  const epitome = new EpitomeInvocation();

  return (
    <div className="details pt-5">
      <Container>
        <Title>
          <h1>
            | Event Wish "<span className="orange">Epitome</span> Invocation"
          </h1>
        </Title>
        <SubheadingSeparator content="Increased Drop Rates!" />
        <StarsBar
          starCount={5}
          content="Percentage of 5-Star Item Drops：75.000%"
          bgColor="#dcbba5"
        />
        <Row>
          <DetailsBox
            title={"Staff of Homa"}
            isWeapon={true}
            src={"staff-of-homa.png"}
          />
          <DetailsBox
            title={"Elegy for the End"}
            isWeapon={true}
            src={"elegy-for-the-end.png"}
          />
        </Row>
        <StarsBar
          starCount={4}
          content="Percentage of 4-Star Item Drops：75.000%"
          bgColor="#b6abbf"
        />
        <Row>
          <DetailsBox
            title={"Wavebreaker's Fin"}
            isWeapon={true}
            src={"wavebreakers-fin.png"}
          />
          <DetailsBox
            title={"Mouun's Moon"}
            isWeapon={true}
            src={"mouuns-moon.png"}
          />
          <DetailsBox
            title={"Sacrificial Sword"}
            isWeapon={true}
            src={"sacrificial-sword.png"}
          />
          <DetailsBox
            title={"Rainslasher"}
            isWeapon={true}
            src={"rainslasher.png"}
          />
          <DetailsBox
            title={"The Widsith"}
            isWeapon={true}
            src={"the-widsith.png"}
          />
        </Row>
        <SubheadingSeparator content="Wish Details" />
        <EventDurationHeading content="Limited Time Event" />
        <Row>
          <Col xs="12">
            <p className="my-3">
              Event Wish "<span className="orange">Epitome</span> Invocation" is
              now available. During this event wish,the event-exclusive 5-star
              weapon{" "}
              <span className="brass">Staff of Homa (Polearm)</span> and
              the 5-star weapon
              <span className="brass">Elegy for the End (Bow)</span> as well as
              the 4-star weapons{" "}
              <span className="purple">Wavebreaker's Fin (Polearm)</span>,
              <span className="purple">Mouun's Moon (Bow)</span>,{" "}
              <span className="purple">Sacrificial Sword (Sword)</span>,{" "}
              <span className="purple">Rainslasher (Claymore)</span>, and{" "}
              <span className="purple">The Widsith (Catalyst)</span> will get a{" "}
              <span className="orange">huge drop-rate boost</span>!
              <br />
              <span className="orange">
                ※ Of the above weapons, the event-exclusive weapon will not be
                available in the standard wish "Wanderlust Invocation".
              </span>
            </p>
            <p className="my-3">〓Rules〓</p>
            <p className="my-3">5-Star Items</p>
            <p className="my-3">
              For Event Wish "<span className="orange">Epitome</span>{" "}
              Invocation": Base probability of winning 5-star weapon ={" "}
              <span className="orange">0.700%</span>; consolidated probability
              (incl. guarantee) = <span className="orange">1.850%</span>;
              guaranteed to win 5-star weapon at least once per{" "}
              <span className="orange">80</span> attempts. <br />
              The first time you win a 5-star weapon in this event, there is a{" "}
              <span className="orange">75%</span> chance it will be one of the
              promotional weapons{" "}
              <span className="brass">
                {" "}
                <span className="brass">Staff of Homa (Polearm)</span> and
              </span>{" "}
              and <span className="brass">Elegy for the End (Bow)</span>. If the
              first 5-star weapon you win in this event wish is not one of the
              promotional weapons, then the next 5-star weapon you win is{" "}
              <span className="orange">guaranteed</span> to be a promotional
              weapon.
            </p>
            <p className="my-3">4-Star Items</p>
            <p className="my-3">
              For Event Wish "<span className="orange">Epitome</span>{" "}
              Invocation": Base probability of winning 4-star item ={" "}
              <span className="orange">6.000%</span>; base probability of
              winning 4-star character = <span className="orange">3.000%</span>,
              and base probability of winning 4-star weapon ={" "}
              <span className="orange">3.000%</span>; consolidated probability
              (incl. guarantee) of winning 4-star item ={" "}
              <span className="orange">14.500%</span>; guaranteed to win 4-star
              or above item at least once per <span className="orange">10</span>{" "}
              attempts; probability of winning 4-star item through the guarantee
              = <span className="orange">99.300%</span>, and probability of
              winning 5-star item through the guarantee ={" "}
              <span className="orange">0.700%</span>
              <br />
              The first time you win a 4-star item in this event wish, there is
              a <span className="orange">75%</span> chance that it will be one
              of the featured weapons{" "}
              <span className="purple">Wavebreaker's Fin (Polearm)</span>,
              <span className="purple">Mouun's Moon (Bow)</span>,{" "}
              <span className="purple">Sacrificial Sword (Sword),</span>,{" "}
              <span className="purple">Rainslasher (Claymore)</span>, and{" "}
              <span className="purple">The Widsith (Catalyst)</span>. If the
              first 4-star item you win in this event wish is not one of the
              featured weapons, then the next 4-star item you win is{" "}
              <span className="orange">guaranteed</span> to be a featured
              weapon.
            </p>
            <p className="my-3">
              5-star weapons won in this wish come with{" "}
              <span className="orange">Masterless Starglitter</span> ×10; 4-star
              weapons won in this wish come with{" "}
              <span className="orange">Masterless Starglitter</span> ×2; 3-star
              weapons won in this wish come with{" "}
              <span className="purple">Masterless Stardust</span> ×15.
            </p>
            <p className="my-3">〓Duplicate Characters〓</p>
            <p className="my-3">
              On obtaining a 4-star character that you already own (whether
              obtained in a wish, redeemed at the shop, or awarded by the game):
              The 2nd – 7th time you obtain the character, it will be converted
              into{" "}
              <span className="purple">that character's Stella Fortuna</span> ×1
              and <span className="orange">Masterless Starglitter</span> ×2;
              from the 8th time onwards it will be converted into{" "}
              <span className="orange">Masterless Starglitter</span> ×5.
            </p>
            <p className="my-3">
              ※ This is a weapon event wish. The wish guarantee count is
              accumulated within this event only and is independent of the
              guarantee counts of other wishes.
            </p>
            <h4 className="my-3 brass">Items to wish for:</h4>
            <StarsBar
              starCount={5}
              content="Base Probability for 5-Star Item Drops: 0.700% (Incl. guarantee: 1.850%)"
              bgColor="#dcbba5"
            />
            <Table items={epitome.getDrops(5)} />
            <StarsBar
              starCount={4}
              content="Base Probability for 4-Star Item Drops: 6.000% (Incl. guarantee: 14.500%)"
              bgColor="#b6abbf"
            />
            <Table items={epitome.getDrops(4)} />
            <StarsBar
              starCount={3}
              content="Base Probability for 3-Star Item Drops: 93.300% (Incl. guarantee: 83.650%)"
              bgColor="#a5bacc"
            />
            <Table items={epitome.getDrops(3)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
