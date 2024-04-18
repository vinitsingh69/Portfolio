import React from 'react'
import './SkillProgress.css' 


 

const SkillProgress = (props) => {
    // const mycolor = `${({ theme }) => theme.primary}` 
    return (
        <div className='container flex'>
            

            {props.title}
            <div className='card '>
                <div className='percent' style={{ '--clr' : "#FFFFFF", '--num': `${props.percentage}` }}>
                    <div className='dot'></div>
                    <svg>
                        <circle cx={70} cy={70} r={70}></circle>
                        <circle cx={70} cy={70} r={70}></circle>
                    </svg>
                    <div className='number'>
                        <h2>{props.percentage}<span>%</span></h2>
                        <p>{props.name}</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default SkillProgress