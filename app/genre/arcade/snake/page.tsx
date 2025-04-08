"use client"

import { useState } from 'react';
import styles from './page.module.css'
import SnakeHead from './Movement';

function snake(){
    
    function addbody(){
        return(
            <div id={styles.addbody}></div>
        );
    }
    
    function foodeaten(){
        let body: HTMLElement | null;
    }
   

    let x = [
        '50px', '75px', '100px', '125px', '150px', '175px', '200px', '225px', 
        '250px', '275px', '300px', '325px', '350px', '375px', '400px', '425px',
        '450px'
    ];
    let y = [
        '50px', '75px', '100px', '125px', '150px', '175px', '200px', '225px', 
        '250px', '275px', '300px', '325px', '350px', '375px', '400px', '425px',
        '450px'
    ];
    let rot = ['rotate(90deg)','rotate(-90deg)'];
    let pos = rot[0];
    let neg = rot[1];
    var pow = 'rotate(0deg)';

    let xrandomIndex = Math.floor(Math.random() * x.length);
    let yrandomIndex = Math.floor(Math.random() * y.length);
    let xIndex = x[xrandomIndex];
    let yIndex = y[yrandomIndex];

    // class snake{
    //     contructor(position:{x: number, y: number},velocity:{x: number, y: number}, update:()=>{}){
    //         position = {
    //             x: 0,
    //             y: 0
    //         }
    //         velocity = {
    //             x: 0,
    //             y: 0
    //         };
            
    //     }
    // }

    // const Snake = new snake()
    // let xPosition;
    // let yPosition;
    
    // window.addEventListener('keyup', (e)=>{
    //     if(e.code==='ArrowUp'){
    //         pow = neg;
    //         console.log(pow);
    //     }
    //     else if(e.code==='ArrowDown'){
    //         pow = pos;
    //         console.log(pow);
    //     }
    //     else if(e.code==='ArrowLeft'){
    //         console.log('left');
    //     }
    //     else if(e.code==='ArrowRight'){
    //         console.log('right');
    //     }
    //     else{
    //         return null;
    //     }
    // })

    let n = pow;
    // console.log(n)
    
    return(
        <div className={styles.snakeboard}>
            <div id={styles.board}>
                <div style={{transform: n}} id={styles.head}>
                    <div id={styles.lefteye}></div>
                    <div id={styles.righteye}></div>
                </div>
                <SnakeHead/>
                <div style={{left: xIndex, top:yIndex}} id={styles.food}></div>
            </div>
        </div>
    )
}

export default snake;
