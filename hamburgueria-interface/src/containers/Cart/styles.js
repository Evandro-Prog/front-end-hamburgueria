import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background-2.svg'

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(rgba(255,255,255, 0.5), 
        rgba(255,255,255, 0.5)), url('${Background}');    
    min-height: 100vh;
`
export const Banner = styled.div`
    background: url('${Texture}');
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img {
        height: 150px;
    }
    
`
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;   

    &::after {
        position: absolute;
        left: calc(50% - 28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #9758a6;

    }
`
export const Content = styled.div`
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`