import React from 'react';
import { useHistory } from 'react-router-dom';
import { onClickAnalytics } from '../../Analytics';
import { PrototypePage, PrototypeHeader } from './PrototypingTools';
import HomeIcon from '@material-ui/icons/Home';

export const oefeningen = [
    {
        label: 'Luister + foto',
        link: 'oefening1',
        img: <img style={{maxWidth: '250px', height: '170px', marginTop: '5px'}} src='/images/Opdrachtvoorbeeld.png' />
    },
    {
        label: 'Spreken',
        link: 'oefening2',
    },
    {
        label: 'Woordzoeker',
        link: 'oefening3',
    },
    {
        label: 'Luister + woord',
        link: 'oefening4',
    }
];

export const Oefenscherm = (props) => {
    const history = useHistory();

    return <PrototypePage childClass='oefenscherm' style={{background: 'rgb(234,245,241)'}}>
        <PrototypeHeader>
            <a href='/prototype2/home' className='default-text-header-button'><span style={{position:'relative', top: '1px'}}>Home</span> <img src='/icons/Home-active.png' style={{maxWidth: '50px', maxHeight: '50px'}} /> </a>
        </PrototypeHeader>
              <div className='h-100 d-flex flex-column w-100 justify-content-center align-items-center'>
            <div className='w-100 d-flex justify-content-center mb-4'>
            {
                oefeningen.slice(0, 2).map(item => {
                    return <div className='d-flex flex-column align-items-center pb-2 mr-4 ml-4 pointer' style={{backgroundColor: 'white', width: '280px', height: '230px', boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.174)'}} onClick={onClickAnalytics(() => history.push(`/prototype2/${item.link}`), item.label)}>        
                        <span className='default-text-header-button w-100 p-2 d-flex justify-content-center'>{item.label}</span>
                        {item.img}
                    </div>
                })
            }
            </div>
            
            <div className='w-100 d-flex justify-content-center mt-4'>
            {
                oefeningen.slice(2, 4).map(item => {
                    return <div className='d-flex flex-column align-items-center pb-2 mr-4 ml-4 pointer' style={{backgroundColor: 'white', width: '280px', height: '230px', boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.174)'}} onClick={onClickAnalytics(() => history.push(`/prototype2/${item.link}`), item.label)}>        
                        <span className='default-text-header-button w-100 p-2 d-flex justify-content-center'>{item.label}</span>
                        <img src={item.icon}/>
                    </div>
                })
            }
            </div>
        </div>
    </PrototypePage>
}
