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
          <img src={databiz} alt="" />
          <img src={audiophile} alt="" />
          <img src={meet} alt="" />
          <img src={maker} alt="" />
        </div>
      </section>
      <div className="img-wrapper">
        <div className="img"></div>
      </div>
    </main>
  );
};

export default Main;
