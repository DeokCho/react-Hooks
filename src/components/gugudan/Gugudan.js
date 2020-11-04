import React, {useState, useEffect} from 'react'

function Gugudan() {
    const [number, setNumber] = useState({
        q1 : 0,
        q2: 0
    })
    const [answerNumber, setAnswerNumber] = useState(0)
    const [complete, setComplete]= useState(false)
    const [submit, setSubmit] = useState(false)
    useEffect(()=>{
        let q1Number = Math.floor(Math.random()*10)
        let q2Number = Math.floor(Math.random()*10)
        setNumber({q1:q1Number, q2:q2Number})
    },[])

    useEffect(()=>{
        if(submit&&number.q1*number.q2==answerNumber){
            setComplete(true)
        }else{
            setSubmit(false)
            setComplete(false)
        }
    },[answerNumber, submit])

    return (
        <div>
            <div>{number.q1} 곱하기 {number.q2} 은?</div>
            <input type="number" value={answerNumber} onChange={e=>{setAnswerNumber(e.currentTarget.value)}}></input>
            <button onClick={()=>setSubmit(true)}>제출</button>
            <div>{complete? "정답": "땡!"}</div>
        </div>
    )
}

export default Gugudan
