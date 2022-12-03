import React, {  useState } from 'react'
import ReactHowler from '../../ReactHowler.js'
import Button from '../uielements/PlayerButton.js'

const OnlyPlayPauseButton = (props) => {
  const { fileName, ...otherProps } = props;
  const play = false;
  const [playing, setPlaying] = useState(() => play);


    return (
      <div>
        <ReactHowler
          src={`https://audpokvbjaytwtmspxjn.supabase.co/storage/v1/object/public/media/bhajans/${fileName}`}
          playing={playing}
        />
        <Button onClick={(e) => setPlaying((v) => !v)}>Play</Button>
        <Button onClick={(e) => setPlaying((v) => !v)}>Pause</Button>
      </div>
    );
  }

export default OnlyPlayPauseButton
