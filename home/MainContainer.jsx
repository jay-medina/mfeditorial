import './MainContainer.css';

import React from 'react';
import ReactDOM from 'react-dom';

const MainContainer = React.createClass({
  render() {
    return (
      <div className="mainContainer">
        <div className="shortIntro">
          <div className="mercyImage"></div>
          <div className="shortIntro__content">
            Bacon ipsum dolor amet meatloaf alcatra pig tail hamburger.
            Bacon kielbasa porchetta cupim venison andouille filet mignon kevin.
            Tenderloin turkey swine hamburger pancetta turducken cupim tongue pork loin
            sausage t-bone pastrami alcatra. Short loin jerky andouille ham strip steak cow,
            tongue pork loin fatback kielbasa brisket. Bacon pork belly pork chop, hamburger
            tongue shankle ground round venison chuck turducken tail ribeye spare ribs cow.
            Pastrami cupim pork loin chicken bacon short ribs shoulder filet mignon. Pork chop
            meatloaf brisket leberkas. Venison pork loin beef ribs sirloin. Landjaeger beef ribs
            shoulder leberkas. Chuck sausage chicken swine pastrami shank tri-tip kevin turducken
            prosciutto.
          </div>

        </div>
      </div>);
  }
});

export default MainContainer;
