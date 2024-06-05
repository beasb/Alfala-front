
import logo from '../../img/logo.svg'
import styled from 'styled-components';

const Logos = styled.div`
display: flex;
font-size: 30px;
`

const LogoImg = styled.img`
margin-right: 10px;
`

function Logo() {
    return (
        <Logos>
            <LogoImg 
            src={logo} 
            alt='Alfala logo'>
            </LogoImg>
            <p><strong>Alfala</strong>Books</p>
        </Logos>
    )
}

export default Logo;