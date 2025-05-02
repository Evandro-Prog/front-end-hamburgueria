import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background-2.svg';


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(rgba(255,255,255, 0.5), 
    rgba(255,255,255, 0.5)), url('${Background}');    
`

export const Banner = styled.div`
    background: url('${BannerHamburguer}') no-repeat;
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;
    position: relative;
    height: 415px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{ 
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #ffffff;
        position: absolute;

        right: 15%;
        top: 30%;

        span {
            display: block;
            color: #ffffff;
            font-size: 20px;              
        }
    }
`
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`
export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#9758a6' : '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};

`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;    
    max-width: 1280px;
    margin: 50px auto;
`