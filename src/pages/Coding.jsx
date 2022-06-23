import { BsCodeSlash } from "react-icons/bs";
import CODINGBG from "../assets/14623.jpg";
import PYTHON from "../assets/python.png";
import CP from "../assets/c.png";
import HTML from "../assets/html.png";
import CSS5 from "../assets/css.png";
import JAVASCRIPT from "../assets/js.png";
import REACT from "../assets/react.png";
import CF from "../assets/cf.png";
import CC from "../assets/cc.png";
import LC from "../assets/lc.png";
import HR from "../assets/hr.png";
import WEBD from "../assets/webd2.jpg";
import APPD from "../assets/appd.jpg";

const Coding = () => {
  return (
    <div className="coding_container">
      <div className="navbar_container">
        <div className="navbar">Coding </div>
        <div className="navbar_logo">
          {" "}
          <BsCodeSlash />{" "}
        </div>
      </div>
      <div className="box__1">
        <div className="image_box">
          <img className="coding__bg" src={CODINGBG} />
          <div className="image_text">
            <h1>Welcome to the Coding Section.</h1>
          </div>
          <div className="coding_icons">
            <img className="coding_icon1" src={PYTHON} />
            <img className="coding_icon2" src={CP} />
            <img className="coding_icon3" src={HTML} />
            <img className="coding_icon4" src={JAVASCRIPT} />
            <img className="coding_icon5" src={CSS5} />
            <img className="coding_icon6" src={REACT} />
          </div>
        </div>
      </div>
      <section className="box_1">
        <div className="box_1_1">
          <h1>Coding Platforms</h1>
          <div className="box_1_2">
            <div className="box_1_3"></div>
            <img
              className="image_2"
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/911b1a591b4e596296b50eef/sa-min.jpg"
              alt=""
            />
            <div className="list_1">
              <div className="list_repeater">
                <div className="list_1-item-1">
                  <div className="item-1-product">
                    <img className="list-1-icon-1" src={CF} />
                    <a
                      href="https://codeforces.com/?f0a28=1"
                      className="list-1-text-1"
                    >
                      CodeForces
                    </a>
                  </div>
                </div>
                <div className="list_1-item-2">
                  <div className="item-2-product">
                    <img className="list-1-icon-2" src={CC} />
                    <a
                      href="https://www.codechef.com/"
                      className="list-1-text-2"
                    >
                      CodeChef
                    </a>
                  </div>
                </div>
                <div className="list_1-item-3">
                  <div className="item-3-product">
                    <img className="list-1-icon-3" src={LC} />
                    <a href="https://leetcode.com/" className="list-1-text-3">
                      LeetCode
                    </a>
                  </div>
                </div>
                <div className="list_1-item-4">
                  <div className="item-4-product">
                    <img className="list-1-icon-4" src={HR} />
                    <a
                      href="https://www.hackerrank.com/"
                      className="list-1-text-4"
                    >
                      HackerRank
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="development_areas">
        <h1>Development Areas</h1>
        <div className="box-2">
          <div className="box-2-1">
            <div className="box-2-1-image">
              <img className="webd" src={WEBD} alt="" />
            </div>
            <div className="box-2-1-text">
              <div className="text-area-box-2">
                <h2>Website Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nam fugit aliquam aspernatur. Inventore repellat
                  obcaecati animi dolore a itaque rerum reiciendis vitae, labore
                  maiores hic? Laudantium distinctio sint reprehenderit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nam fugit aliquam aspernatur. Inventore repellat
                  obcaecati animi dolore a itaque rerum reiciendis vitae, labore
                  maiores hic? Laudantium distinctio sint reprehenderit?
                </p>
              </div>
            </div>
          </div>
          <div className="box-2-2">
            <div className="box-2-2-text">
              <div className="text-area-box-2">
                <h2>Android Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nam fugit aliquam aspernatur. Inventore repellat
                  obcaecati animi dolore a itaque rerum reiciendis vitae, labore
                  maiores hic? Laudantium distinctio sint reprehenderit?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia nam fugit aliquam aspernatur. Inventore repellat
                  obcaecati animi dolore a itaque rerum reiciendis vitae, labore
                  maiores hic? Laudantium distinctio sint reprehenderit?
                </p>
              </div>
            </div>
            <div className="box-2-2-image">
              <img className="appd" src={APPD} alt="" />
            </div>
          </div>
          {/* <div className="box-2-3">
          <div className="box-2-3-image"></div>
            <div className="box-2-3-text"></div>
          </div> */}
        </div>
      </section>
      {/* ////////////
      /////////////
      /////////////
      ///////////// */}
      <section className="Different platform's for Development Courses"></section>
      <section className="RoadMap For Coding And Development"></section>
    </div>
  );
};

export default Coding;
