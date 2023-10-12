 import "./Marquee.css";
 import Marquee from './index.js'

  const MarqueeText = () => {
    return (
    <div className="marquee-horizontal">
        <div className="track-horizontal">
          <div className="marquee-text ">{Marquee.Marquee1}</div>
          <div className="marquee-text ">{Marquee.Marquee2}</div>
          <div className="marquee-text ">{Marquee.Marquee3}</div>
          <div className="marquee-text ">{Marquee.Marquee1}</div>
          <div className="marquee-text ">{Marquee.Marquee2}</div>
          <div className="marquee-text ">{Marquee.Marquee3}</div>
        </div>
    </div>
    );
  };

  export default MarqueeText;
