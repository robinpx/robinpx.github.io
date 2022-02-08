import React, { Component } from 'react';
import p5 from 'p5';

class MorseBanner extends Component {
    constructor(props) {
        super(props);
        this.sketchRef = React.createRef();
    }

    Sketch = (p5) => {
        let morse_dict = {};
        let y=0;
        let word_ind=1;
        let array_ind=0;
        let words=[];
        let total_lines = 0;
        let curr_lines = 0;
        let prev_drop = 0; // store the prev drop buffer 

        p5.setup = () => {
            if (p5.windowWidth < p5.windowHeight) {
                p5.resizeCanvas(p5.windowWidth-30,500);
            }
            else {
                p5.resizeCanvas(p5.windowWidth*0.7,500);
            }
            morse_dict["a"] = ".-";
            morse_dict["b"] = "-...";
            morse_dict["c"] = "-.-.";
            morse_dict["d"] = "-..";
            morse_dict["e"] = ".";
            morse_dict["f"] = "..-.";
            morse_dict["g"] = "--.";
            morse_dict["h"] = "....";
            morse_dict["i"] = "..";
            morse_dict["j"] = ".--";
            morse_dict["k"] = "-.-";
            morse_dict["l"] = ".-..";
            morse_dict["m"] = "--";
            morse_dict["n"] = "-.";
            morse_dict["o"] = "---";
            morse_dict["p"] = ".--.";
            morse_dict["q"] = "--.-";
            morse_dict["r"] = ".-.";
            morse_dict["s"] = "...";
            morse_dict["t"] = "-";
            morse_dict["u"] = "..-";
            morse_dict["v"] = "...-";
            morse_dict["w"] = ".--";
            morse_dict["x"] = "-..-";
            morse_dict["y"] = "-.--";
            morse_dict["z"] = "--..";
            //print(morse_dict);
            y=20;
        }

        p5.windowResized = () => {
            if (p5.windowWidth < p5.windowHeight) {
                p5.resizeCanvas(p5.windowWidth-20,500);
            }
            else {
                p5.resizeCanvas(p5.windowWidth*0.7,500);
            }
            word_ind=0;
            array_ind=0;
            total_lines=0;
            p5.background(255);
        }

        p5.draw = () => {
            words=["noticing","treading", 
            "holding",
            "every step moving in an infinite number of directions", 
            "fitting in is a little like falling into being",
            "to know what love i have because i have asked for it"];
            if (array_ind < words.length && word_ind < words[array_ind].length) {
                // p5.print("typing '" + words[array_ind] + "'...");
                let typing = type_string(words[array_ind],0,word_ind);
                if (y % 50 === 0) {
                    typing = type_string(words[array_ind],0,word_ind);
                    word_ind+=1;
                }
                let my_morse = new MorseCode(typing);
                my_morse.display(p5.cos(y)+20 + (total_lines*20));
                if (y > 0) {
                    y-=2;
                }
                else {
                    y=20;
                }
            }
            else {
                word_ind=0;
                array_ind+=1;
                total_lines=curr_lines+array_ind;
            }

        }

        p5.mousePressed = () => {
          if (!(array_ind < words.length && word_ind < words[array_ind].length)) {
            p5.background(255);
            word_ind=1;
            array_ind=0;
            total_lines=0;
          }
        }

        const type_string = (string, start,end) => {
            if (start < end) {
              return string.substring(start,end);
            }
            else {
              return "";
            }
        }

        class MorseCode {
            constructor(string) {
              this.string = string;
              let morse="";
              for (let i=0;i< this.string.length;i++) {
                if (morse_dict[string[i]] !== undefined) {
                  morse+=morse_dict[string[i]];
                }
                else if (string[i] === " ") { // beginning of new word
                  morse+="/";
                }
                morse+="#"; // add space after every letter
              }
              this.morse = morse;
              // p5.print(morse);
            }

            display(drop) {
              const sqw=2;
              const rw=sqw*4;
              const h=1;
              const sp=2;
              let offset=0;
              p5.noStroke();
              p5.fill(50);
              for (let i=0; i < this.morse.length;i++) {
                if ("." === this.morse[i]) {
                  if (i === 0 || offset === sp) {
                    p5.rect(sp+rw+offset,drop,sqw,h);
                    offset+=rw+sp;
                  }
                  else {
                    p5.rect(sp+sqw+offset,drop,sqw,h);
                    offset+=sqw+sp;
                  }
                }
                else if ("-" === this.morse[i]) {
                   p5.rect(sp+rw+offset,drop,rw,h);
                   offset+=rw+(4*sp);
                }
                else if ("/" === this.morse[i]) {
                  offset+=(sp*4);
                }
                else if ("#" === this.morse[i]) {
                  offset+=(sp*2);
                }
                if (offset >= p5.width) {
                  offset=sp;
                  prev_drop = drop;
                  drop+=(sp*10);
                  if (drop - prev_drop <= y) { // a new break has occurred
                    curr_lines = 1; // amount of extra lines the text takes to update y in draw
                  }
                }
              }
            }
          }
    }

    componentDidMount() {
      if (this.sketchRef) {
        this.sketch = new p5(this.Sketch, this.sketchRef.current);
      }
    }

    render() {
        return(
            <div className='sketch' ref={this.sketchRef}></div>
        )
    }
}

export default MorseBanner;
