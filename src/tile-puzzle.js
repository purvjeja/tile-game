import React, { useEffect, useState } from 'react';
import "./tile-puzzle.css";
function TileGame() {
    const shuffle = () => {
        let array = [0,1,2,3,4,5,6,7,8];
        let top = array.length; 
        let current,temp;
        while(--top) {
          current = parseInt(Math.random() * (top+1));
          temp = array[top];
          array[top] = array[current];
          array[current] = temp;
        }
        return array;
      }
  
    let [arrayOfNumbers,setArrayOfNumbers] = useState(shuffle); 
    let [emptyBoxPosition,setEmptyBoxPosition] = useState(arrayOfNumbers.indexOf(0));
    let [moveCount,setMoveCount] = useState(0);
    let [StartTime,setStartTime] = useState(0);
    let [handleGameTimeData,setHandleGameTimeData] = useState(false);

    useEffect(() =>  {
      if(moveCount === 1) setStartTime(Date.now());
      if(JSON.stringify(arrayOfNumbers) === JSON.stringify([1,2,3,4,5,6,7,8,0])) {
        alert(`Voila, You finished the game!`);
        if(!(handleGameTimeData)) setHandleGameTimeData(true);
       }  
       // eslint-disable-next-line
      },[moveCount,arrayOfNumbers]
    );

    const CreateBox = (props) => {
        const className = (props.item === 0) ? "zeroBox" : "boxes" ;   
        const content = (props.item === 0 ) ? (emptyBoxPosition === 8) ? "" : emptyBoxPosition + 1 : props.item;
        return (
            <div className={className} onClick={() => swap(props.item)}>
               <div className="numberContent"> {content} </div>
           </div>
        )
    }

    const swap = (id) => {

      const boxToSwapWith = arrayOfNumbers.indexOf(id);

      const checkColumnAdjacent = (Math.abs(boxToSwapWith - emptyBoxPosition) === 3);                                         // for columns
      const checkRowAdjacentRight = ((boxToSwapWith - emptyBoxPosition === 1) && (boxToSwapWith%3 !== 0)) ?  true : false;    // for row right
      const checkRowAdjacentLeft = ((boxToSwapWith - emptyBoxPosition === -1) && (boxToSwapWith%3 !== 2)) ? true : false;     // for row left

      if(checkColumnAdjacent || checkRowAdjacentLeft || checkRowAdjacentRight) {
        
        let tempArray = arrayOfNumbers

        // swap method
        let temp = tempArray[boxToSwapWith];
        tempArray[boxToSwapWith] = tempArray[emptyBoxPosition];
        tempArray[emptyBoxPosition] = temp;
        
        //setting state
        setEmptyBoxPosition(boxToSwapWith);
        setMoveCount(moveCount + 1);
        setArrayOfNumbers(tempArray); 
      }
    }

    const receiveTime = (timeData) => {
      alert(`Completed in ${timeData.m} Minutes : ${timeData.s} Seconds and in ${moveCount} Moves!`);
      window.location.reload();
    }

    return (
    <div className="renderArea">
     <div className="outerMainBox">
      <div><h1>Moves - {moveCount}</h1></div> 
      <div><h2>Time - <TimeCount startTime = {StartTime} sendTime = {receiveTime} status={handleGameTimeData} /></h2></div> 
      <div className="mainBox" >
        <div id="boxWithBoxes" className="innerBox">
          {arrayOfNumbers.map((number) => <div key={number} ><CreateBox item={number} /></div>)}      
        </div>
      </div>
    <button 
    onClick={() => { 
      window.location.reload();
    }}
    > Shuffle </button>
    </div>
   </div>
  );
}

const TimeCount = (props) => {
  let [timeCount,setTimeCount] = useState(0);
  let [timeShownStatus,setTimeShowStatus] = useState(false); 
  if(timeCount === 0 && props.startTime !== 0) 
    setInterval(() => { 
      setTimeCount(parseInt((Date.now() - props.startTime)/1000)) 
    },1000);   
    
  let timeMinutes = `${(timeCount/60 < 10) ? '0' : ''}${parseInt(timeCount/60)}`;
  let timeSeconds =  `${(timeCount%60 < 10) ? '0' : ''}${timeCount%60}`;
  if(props.status && !(timeShownStatus)) { 
    props.sendTime({m : timeMinutes, s : timeSeconds}); 
    setTimeShowStatus(!timeShownStatus);
  }
  
  return `${timeMinutes} Min : ${timeSeconds} Sec` 
}
export default TileGame;