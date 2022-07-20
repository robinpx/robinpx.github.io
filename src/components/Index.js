import React from 'react';
import MainFrame from './MainFrame';
import Profile from './Profile';

function Index() {

  const windowlink = window.location.href;

  if (windowlink.includes("/?profile") > 0) {
    return (
      <Profile />
    );
  }
  else if (windowlink.includes("/?other") > 0) {
      return (
        <div>
        {/* <div id="banner">Robin Luo is an <b>artist</b> who works with text, sound, space, and computation.</div> */}
        <MainFrame kind="art" />
        </div>
      )
  }
  else if (windowlink.includes("/?work") > 0) {
    return (
    <div>
      {/* <div id="banner">Robin Luo is a software <b>engineer</b> who has worked in research, and media art.</div> */}
      <MainFrame kind="code" />
    </div>
    )
  }
  return (
    <div>
      <div id="ascii">
..............................................................<br/>
.                      .--------------.                      .<br/>                                           
.                 .---'  o        .    `---.                 .<br/>    
.              .-'    .    O  .         .   `-.              .<br/>    
.           .-'     @@@@@@       .             `-.           .<br/>    
.         .'@@   @@@@@@@@@@@       @@@@@@@   .    `.         .<br/>    
.       .'@@@  @@@@@@@@@@@@@@     @@@@@@@@@         `.       .<br/>    
.      /@@@  o @@@@@@@@@@@@@@     @@@@@@@@@     O     \      .<br/>    
.     /        @@@@@@@@@@@@@@  @   @@@@@@@@@ @@     .  \     .<br/>    
.    /@  o      @@@@@@@@@@@   .  @@  @@@@@@@@@@@     @@ \    .<br/>    
.   /@@@      .   @@@@@@ o       @  @@@@@@@@@@@@@ o @@@@ \   .<br/>    
.  /@@@@@                  @ .      @@@@@@@@@@@@@@  @@@@@ \  .<br/>    
.  |@@@@@    O    `.-./  .        .  @@@@@@@@@@@@@   @@@  |  .<br/>    
. / @@@@@        --`-'       o        @@@@@@@@@@@ @@@    . \ .<br/>    
. |@ @@@@ .  @  @    `    @            @@      . @@@@@@    | .<br/>    
. |   @@                         o    @@   .     @@@@@@    | .<br/>    
. |  .     @   @ @       o              @@   o   @@@@@@.   | .<br/>    
. \     @    @       @       .-.       @@@@       @@@      / .<br/>    
.  |  @    @  @              `-'     . @@@@     .    .    |  .<br/>    
.  \ .  o       @  @@@@  .              @@  .           . /  .<br/>    
.   \      @@@    @@@@@@       .                   o     /   .<br/>    
.    \    @@@@@   @@\@@    /        O          .        /    .<br/>    
.     \ o  @@@       \ \  /  __        .   .     .--.  /     .<br/>    
.      \      .     . \.-.---                   `--'  /      .<br/>    
.       `.             `-'      .                   .'       .<br/>    
.         `.    o     / | `           O     .     .'         .<br/>    
.           `-.      /  |        o             .-'           .<br/>    
.              `-.          .         .     .-'              .<br/>    
.                 `---.        .       .---'                 .<br/>    
.                      `--------------'`                     .<br/> 
..............................................................<br/>   
      </div>
      <div id="banner">Robin Luo is a <b>software developer</b> and <b>artist</b> based in the New York City area.</div>
    </div>
  );
}

export default Index;
