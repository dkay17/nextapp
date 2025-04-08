"use client"

function SoundButton(){
  const handleClick = () =>{
    const audio=new Audio()
    audio.src = "./Song.mp3";
    audio.play()
  }
  return (
    <>
      <button onClick={handleClick} id="but">
        Play sound
      </button>
     </>
    );
      
}

export default SoundButton;
