import React, {useState, useEffect} from 'react'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { useSpeechSynthesis } from 'react-speech-kit';
import { PrototypePage, Button } from './PrototypingTools'
import {setItem, getItem} from '../Storage'
import {useHistory} from 'react-router-dom'
import {oefeningen as aO} from './Oefenscherm'

const roulette = [
    'Hond',
    'Kat',
    'huis'
];

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

const Exc = ({oefeningType}) => {
    const { speak } = useSpeechSynthesis();
    const [chosenWord, setChosenWord] = useState('');
    const [chooseList, setChooseList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const chWord = roulette[Math.floor(Math.random() * roulette.length)]
        setChosenWord(chWord);
        setChooseList(shuffle(roulette.filter(a => a !== chWord).slice(0, 3).concat(roulette.filter(a => a === chWord))))
    }, [])

    const correctlyMade = () => {
        setItem(oefeningType, true)
        if (getItem(oefeningType) && getItem(oefeningType) === true) {
            return history.push({pathname: '/prototype/resultaat'})
        }
        history.push({pathname: '/prototype/resultaat', search: '?grown=true'})
    }

    return <PrototypePage childClass='oefening'>
        <div className='d-flex flex-column h-100 justify-content-around'>
            <div className='d-flex flex-column mt-3 mb-3 p-2 default-text ml-5'>
                <span>Luister naar het woord.</span>
                <span>Kies de juiste afbeelding.</span>
                <div onClick={() => speak({text: chosenWord, lang: 'nl-NL'})} className='d-flex p-2 align-items-center mt-3'>
                    <VolumeUpIcon style={{fontSize: '40px', color: '#7FBCC6'}} />
                    <Button className='btn-default-text ml-2'>Luister</Button>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                {
                    chooseList.map(word => {
                        const click = () => {
                            if (word === chosenWord) {
                                correctlyMade()
                            }
                        }
                        return <div className='bg-grey placeholder d-flex justify-content-center align-items-center' onClick={click}>{word}</div>;
                    })
                }
            </div>
        </div>
    </PrototypePage>
}

export const Oefening1 = (props) => {
    return <Exc oefeningType={aO[0].link}/>
}

export const Oefening2 = (props) => {
    return <Exc oefeningType={aO[1].link}/>
}

export const Oefening3 = (props) => {
    return <Exc oefeningType={aO[2].link}/>
}

export const Oefening4 = (props) => {
    return <Exc oefeningType={aO[3].link}/>
}

export const Oefening5 = (props) => {
    return <Exc oefeningType={aO[4].link}/>
}

export const Oefening6 = (props) => {
    return <Exc oefeningType={aO[5].link}/>
}