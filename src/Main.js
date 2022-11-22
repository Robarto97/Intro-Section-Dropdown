import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
const Main = () => {
  return (
    <main>
      <section className="content">
        <h1>
          Make <span>remote work</span>
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a href="/">Learn more</a>
        <div className="teams">
          <div className="img-wrapper">
            <img src={databiz} alt="" />
          </div>
          <div className="img-wrapper">
            <img src={audiophile} alt="" />
          </div>
          <div className="img-wrapper">
            <img src={meet} alt="" />
          </div>
          <div className="img-wrapper">
            <img src={maker} alt="" />
          </div>
        </div>
      </section>
      <div className="img-wrapper">
        <div className="img"></div>
      </div>
    </main>
  );
};

export default Main;
