import React, {useState, useEffect} from 'react'

function Gugudan() {
    const [number, setNumber] = useState({
        first : Math.ceil(Math.random()*9),
        second : Math.ceil(Math.random()*9)
    })
    const [answerNumber, setAnswerNumber] = useState('')
    const [complete, setComplete]= useState(false)

    const onChange = e => {
        setAnswerNumber(e.currentTarget.value)
    }

    const onSubmit = e => {
        if(parseInt(answerNumber)===number.first*number.second){
            setComplete(true)
        }else{
            setComplete(false)
        }
    }

    return (
        <div>
            <div>{number.first} 곱하기 {number.second} 은?</div>
                <input type="number" value={answerNumber} 
                    onChange={onChange}/>
            <button onClick={onSubmit}>제출</button>
            
            <div>{complete? "정답": "땡!"}</div>
        </div>
    )
}

export default Gugudan
