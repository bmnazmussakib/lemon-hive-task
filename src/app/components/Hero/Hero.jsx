import "./hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-content" >
            {/* <div className="line-bg-1">
              <img src="/img/line-1.png" alt="" />
            </div> */}
            <div className="line-bg-2"></div>
            <div className="left">
              <div className="top">
                <img src="/img/bling-line.png" alt="" className="bling" />
                <h1>React <br /> Conference</h1>
              </div>
              <div className="bottom">
                <div className="banner-img-1">
                <img src="/img/banner-img-1.png" alt="" className="img-1" />
                  <img src="/img/Ornament.png" alt="" className="ornament" />
                </div>
                <div className="text">
                  <p>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                  <div className="hero-btn-wrapper">
                  <a href="" className="buy-btn">
                    <span>Buy Ticket</span>
                    <img src="/img/bi_arrow-up-right.png" alt="" />
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="banner-img-2">
                <img className="img-2" src="/img/banner-img-2.png" alt="" />
                <img className="star" src="/img/star.png" alt="" />
              </div>
              <div className="banner-img-1">
                  <img src="/img/banner-img-1.png" alt="" className="img-1" />
                  <img src="/img/Ornament.png" alt="" className="ornament" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
