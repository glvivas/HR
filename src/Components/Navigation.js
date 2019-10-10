import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export default function Navigation() {
    return (
    <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
                <Nav.Link href="/">Employees</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/proyects">Proyects</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
