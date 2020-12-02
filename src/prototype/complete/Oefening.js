import React, { useState, useEffect, useRef } from 'react'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useSpeechSynthesis } from 'react-speech-kit';
import { PrototypePage, Button } from './PrototypingTools'
import { setItem, getItem } from '../Storage'
import { useHistory } from 'react-router-dom'
import { oefeningen as aO } from './Oefenscherm'
import { onClickAnalytics } from '../../Analytics';
import CircularProgress from '@material-ui/core/CircularProgress';

const roulette = [
    {
        word: 'hond',
        img: '/images/hond.jpg'
    },
    {
        word: 'kat',
        img: '/images/kat.jpeg'
    },
    {
        word: 'huis',
        img: '/images/huis.jpeg'
    },
    {
        word: 'boom',
        img: '/images/boom.jpg'
    },
    {
        word: 'fiets',
        img: '/images/fiets.jpg'
    },
    {
        word: 'boot',
        img: '/images/boot.jpg'
    }
];

const amountPerExc = 3;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const ExcSwitch = ({ oefeningType }) => {
    const [active, setActive] = useState(0);
    const history = useHistory();

    const cm = () => {
        setItem(oefeningType, true)
        if (getItem(oefeningType) && getItem(oefeningType) === true) {
            return onClickAnalytics(history.push({ pathname: '/prototype/resultaat' }), 'Resultaat')
        }
        onClickAnalytics(history.push({ pathname: '/prototype/resultaat', search: '?grown=true' }), 'Resultaat')
    }
    if (active === 0) {
        return <Exc oefeningType={oefeningType} active={active} correctlyMade={() => setActive(1)} />
    } else if (active === 1) {
        return <Exc oefeningType={oefeningType} active={active} correctlyMade={() => setActive(2)} />
    } else if (active === 2) {
        return <Exc oefeningType={oefeningType} active={active} correctlyMade={() => setActive(3)} />
    }
    return <Exc oefeningType={oefeningType} active={active} correctlyMade={() => cm()} />
}

const Exc = ({ oefeningType, correctlyMade, active }) => {
    const { speak, voices } = useSpeechSynthesis();
    const [chosenWord, setChosenWord] = useState('');
    const [chooseList, setChooseList] = useState([]);
    const [count, setCount] = useState(true)
    const [timeoutCount, setTimeoutCount] = useState(false)
    const [tryAgain, setTryAgain] = useState(false);
    const history = useHistory();

    // an async callback.
    const countRef = useRef(false)


    useEffect(() => {
        setTryAgain(false);
        countRef.current = false
        setTimeoutCount(false);
        const chWord = roulette[Math.floor(Math.random() * roulette.length)].word
        setChosenWord(chWord);
        setChooseList(shuffle(roulette.map(a => a.word).filter(a => a !== chWord).slice(0, 2).concat(roulette.map(a => a.word).filter(a => a === chWord))))
        setTimeout(() => {
            console.log('GOO')
            countRef.current = true
            setTimeoutCount(true);
        }, 200);
    }, [active])

    return <PrototypePage childClass='oefening'>
        <div className='d-flex flex-column h-100 justify-content-around'>
            <div className='d-flex flex-column mt-3 mb-3 p-2 default-text ml-5 mr-5'>
                <div className='d-flex w-100 justify-content-end'><span className='default-text'>{active + 1} </span> <span className='default-text muted-text text-muted'>{' '} /4</span></div>
                <span>Luister naar het woord.</span>
                <span>Kies de juiste afbeelding.</span>
                <div onClick={() => {
                    speak({
                        text: chosenWord, voice: voices[13]

                    }); console.log(countRef.current)
                }} className='d-flex p-2 align-items-center mt-3'>
                    <VolumeUpIcon style={{ fontSize: '40px', color: '#7FBCC6' }} />
                    <Button className='btn-default-text ml-2'>Luister</Button>
                </div>
            </div>
            {
                tryAgain && <div className='d-flex w-100 justify-content-end small-text pr-5' style={{height: 'min-content'}}>Probeer opnieuw</div>
            }
            {
                countRef.current === true ? <div className='d-flex justify-content-around'>
                    {
                        chooseList.map(word => {
                            const click = () => {
                                if (word === chosenWord) {
                                    correctlyMade()
                                } else {
                                    setTryAgain(true)
                                }
                            }
                            return <div className='placeholder d-flex justify-content-center align-items-center' onClick={click} style={{ backgroundImage: `url(${roulette.find(r => r.word === word).img})` }}></div>;
                        })
                    }
                </div> : <div style={{ height: '200px' }} className='w-100 d-flex justify-content-center align-items-center'><CircularProgress color="secondary" /></div>
            }
        </div>
    </PrototypePage>
}

export const Oefening1 = (props) => {
    return <ExcSwitch oefeningType={aO[0].link} />
}

export const Oefening2 = (props) => {
    return <ExcSwitch oefeningType={aO[1].link} />
}

export const Oefening3 = (props) => {
    return <ExcSwitch oefeningType={aO[2].link} />
}

export const Oefening4 = (props) => {
    return <ExcSwitch oefeningType={aO[3].link} />
}

export const Oefening5 = (props) => {
    return <ExcSwitch oefeningType={aO[4].link} />
}

export const Oefening6 = (props) => {
    return <ExcSwitch oefeningType={aO[5].link} />
}
{/* <img style={{maxWidth: '100%', maxHeight: '100%'}} src={roulette.find(r => r.word === word).img} /> */ }