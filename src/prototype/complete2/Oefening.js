import React, { useState, useEffect, useRef } from 'react'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useSpeechSynthesis } from 'react-speech-kit';
import { PrototypePage, Button, PrototypeHeader } from './PrototypingTools'
import { setItem, getItem } from '../Storage'
import { useHistory } from 'react-router-dom'
import { oefeningen as aO } from './Oefenscherm'
import { onClickAnalytics } from '../../Analytics';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSound from 'use-sound';
import $ from 'jquery'
const hondSound = '/sounds/Hond.mp3'
const katSound = '/sounds/Kat.mp3'
const huisSound = '/sounds/Huis.mp3'
const boomSound = '/sounds/Boom.mp3'
const fietsSound = '/sounds/Fiets.mp3'
const bootSound = '/sounds/Boot.mp3'

function click(x, y) {
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x, y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}

const roulette = [
    {
        word: 'hond',
        img: '/images/hond.jpg',
        audio: hondSound
    },
    {
        word: 'kat',
        img: '/images/kat.jpeg',
        audio: katSound
    },
    {
        word: 'huis',
        img: '/images/huis.jpeg',
        audio: huisSound
    },
    {
        word: 'boom',
        img: '/images/boom.jpg',
        audio: boomSound
    },
    {
        word: 'fiets',
        img: '/images/fiets.jpg',
        audio: fietsSound
    },
    {
        word: 'boot',
        img: '/images/boot.jpg',
        audio: bootSound
    }
];

const amountOfExcPerThing = 4;

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
    const [previousChosenWord, setPreviousChosenWord] = useState('');
    const history = useHistory();

    useEffect(() => setItem('firsttry', 0), [])

    const cm = () => {
        const currentDoelPercentage = getItem('currentDoelPercentage') ? +getItem('currentDoelPercentage') + 20 : 20;
        setItem('currentDoelPercentage', currentDoelPercentage)
        onClickAnalytics(history.push({ pathname: '/prototype2/resultaat', search: '?grown=true' }), 'Resultaat');
    }
    return <><Exc oefeningType={oefeningType} active={active} setPreviousChosenWord={setPreviousChosenWord} previousChosenWord={previousChosenWord} correctlyMade={() => {
        if (active === amountOfExcPerThing - 1) {
            cm()
        } else {
            setActive(active + 1)
        }
    }} /></>
}

const defaultClickedScheme = {
    0: false,
    1: false,
    2: false,
    failed: false
}

const completeOnFirstTryDefault = {
    0: false,
    1: false,
    2: false,
    3: false 
}

const Exc = ({ oefeningType, correctlyMade, active, setPreviousChosenWord, previousChosenWord }) => {
    const { speak, voices } = useSpeechSynthesis();
    const [chosenWord, setChosenWord] = useState('');
    const [currentChosenWord, setCurrentChosenWord] = useState('');
    const [chooseList, setChooseList] = useState([]);
    const [alreadyClicked, setAlreadyClicked] = useState(defaultClickedScheme)
    const [count, setCount] = useState(true)
    const [timeoutCount, setTimeoutCount] = useState(false)
    const [tryAgain, setTryAgain] = useState(false);
    const history = useHistory();
    const countRef1 = useRef('');

    // an async callback.
    const countRef = useRef(false)

    const [playfiets] = useSound(fietsSound);
    const [playboot] = useSound(bootSound);
    const [playboom] = useSound(boomSound);
    const [playkat] = useSound(katSound);
    const [playhond] = useSound(hondSound);
    const [playhuis] = useSound(huisSound);

    const soundMap = {
        hond: playhond,
        kat: playkat,
        huis: playhuis,
        boom: playboom,
        boot: playboot,
        fiets: playfiets
    }

    useEffect(() => {
        setTryAgain(false);
        countRef.current = false
        setTimeoutCount(false);
        let chWord = '';

        //never select previous word
        const rIndex = Math.floor(Math.random() * roulette.length)
        if (roulette[rIndex].word === previousChosenWord) {
            const nIndex = rIndex + 1 > roulette.length ? rIndex - 1 : rIndex + 1;
            chWord = roulette[nIndex].word
        } else {
            chWord = roulette[rIndex].word
        }

        setChosenWord(chWord);
        countRef1.current = chWord;
        setChooseList(shuffle(roulette.map(a => a.word).filter(a => (a !== chWord)).slice(0, 2).concat(roulette.map(a => a.word).filter(a => a === chWord))))
        setTimeout(() => {
            console.log('GOO')
            countRef.current = true
            setTimeoutCount(true);
        }, 200);
        // nieuwe set timout met autoplay sound
    }, [active])

return <PrototypePage childClass='oefening'>
        <PrototypeHeader style={{background: 'rgb(247, 247, 247)', padding: '20px 40px'}}>
            <a href='/prototype2/oefenscherm' className='default-text-header-button oefening'>Stop <img src='/icons/Stop.png' style={{ maxWidth: '50px', maxHeight: '50px' }} /> </a>
        </PrototypeHeader>
        <div className='d-flex flex-column h-100 justify-content-around'>
            <div className='d-flex flex-column mt-3 mb-3 p-2 default-text ml-5 mr-5'>
                <div className='d-flex w-100 justify-content-end'><span className='default-text'>{active + 1} </span> <span className='default-text muted-text text-muted'>{' '} /{amountOfExcPerThing}</span></div>
                <span className='normal-big-text'><span style={{fontWeight: 'bold'}}>Luister</span> naar het woord.</span>
                <span className='normal-big-text'><span style={{fontWeight: 'bold'}}>Kies</span> de juiste foto.</span>
                <div onClick={() => {
                    soundMap[chosenWord]()
                }} className='d-flex align-items-center mt-4'>
                    <Button className='btn-default-text' style={{padding: '0 15px'}}><span>Luister</span> <VolumeUpIcon className='ml-2' style={{ fontSize: '40px', color: '#7FBCC6' }} /></Button>
                </div>
            </div>
            {/* {
                tryAgain && <div className='d-flex w-100 justify-content-end small-text pr-5' style={{ height: 'min-content' }}>Probeer opnieuw</div>
            } */}
            {
                countRef.current === true ? <div className='d-flex justify-content-around'>
                    {
                        chooseList.map((word, i) => {
                            const click = async () => {
                                if (word === chosenWord) {
                                    setCurrentChosenWord(word);
                                    setPreviousChosenWord(word);
                                    await setTimeout(() => {correctlyMade(); setAlreadyClicked(defaultClickedScheme)}, 2000);

                                    // nog geen grijze dan first try success
                                    if (!alreadyClicked.failed) {
                                        let newCount = getItem('firsttry') ? +getItem('firsttry') + 1 : 1;
                                        if (newCount > 4) newCount = 4;
                                        setItem('firsttry', newCount);
                                    }
                                } else {
                                    setTryAgain(true)
                                    setAlreadyClicked(prev => ({...prev, failed: true, [i]: true}))
                                }
                            }
                            return <div className={`placeholder d-flex justify-content-center align-items-center ${alreadyClicked[i] ? 'wrong' : ''}  ${word !== chosenWord && currentChosenWord === chosenWord ? 'wrong' : ''} ${word === chosenWord && currentChosenWord === chosenWord ? 'correct' : ''}`} onClick={click} style={{ backgroundImage: `url(${roulette.find(r => r.word === word).img})` }}></div>;
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