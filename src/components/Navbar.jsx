import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";


const Section = styled.div`
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px; 
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
const Logo = styled.img`
    height: 50px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;
const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: #383d3a;
    background-color: #0BEE40;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

function Navbar() {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png"/>
            <List>
                <ListItem><StyledLink to={`/`} >Home</StyledLink></ListItem>
                <ListItem><StyledLink to={`blog/`} >Studio</StyledLink></ListItem>
                <ListItem><StyledLink to={`blog/`} >Works</StyledLink></ListItem>
                <ListItem><StyledLink to={`blog/`} >Contacts</StyledLink></ListItem>
                <ListItem><StyledLink to={`blog/`} >Blog</StyledLink></ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar