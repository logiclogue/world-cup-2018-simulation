import React from "react";

const Container = ({ children }) => (
    <div className="container">
        {children}
    </div>
);

const Row = ({ children }) => (
    <div className="row mt-5">
        {children}
    </div>
);

const Section = ({ title, children }) => (
    <Row>
        <h3>{title}</h3>
        {children}
    </Row>
);

export { Container, Row, Section };
