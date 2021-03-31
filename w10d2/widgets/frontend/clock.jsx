import React from 'react';
import * as Tone from 'tone'

class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = { date: new Date()};
      this.tick = this.tick.bind(this);
      this.tone = this.tone.bind(this)
    }

    tone() {
      const reverb = new Tone.JCReverb(0.7)
      const synth = new Tone.Synth().chain(reverb).toDestination();
      const now = Tone.now()
      // const synth = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
      synth.triggerAttack("C4", now)
      synth.triggerRelease(now + 0.5)
      synth.triggerAttack("G4", now + 0.3)
      synth.triggerRelease(now + 0.1)
      synth.triggerAttack("C3", now + 0.5)
      synth.triggerRelease(now  + 1)
    }

    tick() {
      this.tone
      this.id = this.setState( { date: new Date()} ); 
    }

    componentWillUnmount() {
      clearInterval(this.id)
    }
    
    render() {
      return (
        <h1>CLOCK {this.state.date.toTimeString()}</h1>
      )
    }
      
    componentDidMount() {
      setInterval(this.tick, 1000);
    }


}

export default Clock;