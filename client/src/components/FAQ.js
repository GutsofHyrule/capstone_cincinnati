import React from 'react';
import { Helmet } from 'react-helmet';
import "./style.css";
import  FAQbanner  from "./img/FAQ.png";

const FAQs = () => {
const handleClick = faqs =>{
    faqs.currentTarget.classList.toggle('active')
}
    return(
<>
  <img
    style={{
      width: "100vw",
      height: "60vh",
      backgroundColor: "blue",
      marginLeft: "-1rem",
      marginTop: "-1rem"
    }}
    src={FAQbanner}
    alt=""
  />
  <section className="FAQ-section">
    <h2 className="title" />
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Where is Cincinnati?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          The choice is all yours! The selection of events and attractions is
          endless - from amusement parks and world-class museums to professional
          sports and five-star dining. Whatever your taste, schedule or budget,
          there is something waiting for you here in the Cincinnati region.
        </p>
      </div>
    </div>
    {/* 2 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Is the Cincinnati region known for any foods?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          Yes! There are many unique options, but a few that have put us on the
          map include: Cincinnati-style chili, Montgomery Inn barbeque sauce,
          goetta, and Graeter's ice cream.
        </p>
      </div>
    </div>
    {/* 3 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Where should I stay?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          There are a variety of accommodations to choose from on both sides of
          the Ohio River ranging from budget to full service.{" "}
        </p>
      </div>
    </div>
    {/* 4 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Why are pigs so significant to Cincinnati?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          The nickname Porkopolis was attributed to Cincinnati around 1835. At
          that time, the city was the nation’s primary hog packing center and
          herds of pigs often traveled the streets. The Flying Pig Marathon is
          named in part because of the historical importance of the pig industry
          to Cincinnati.{" "}
        </p>
      </div>
    </div>
    {/* 5 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>When is the best time to visit the Cincinnati region?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          Many would say any day all year; however, there are some attractions
          and events best experienced during specific seasons. For example,
          sports are at their peak on hot summer nights. Catch a Cincinnati Reds
          baseball game at the Great American Ball Park on the Ohio riverfront
          and then stroll next door to Moerlein Lager House or Smale Riverfront
          Park. Fall's spectacular foliage and colors are breathtaking from a BB
          Riverboats cruise in late September or October. Holiday lights are
          illuminating at the Cincinnati Zoo &amp; Botanical Garden and around
          the region in December. You get the picture!{" "}
        </p>
      </div>
    </div>
    {/* 6 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Is Cincinnati  generally considered a safe city to visit?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          Violent crime tends to be clustered in certain high-crime
          neighborhoods and other crime outside of these areas is usually minor
          or property-related{" "}
        </p>
      </div>
    </div>
    {/* 7 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>What does the name Cincinnati mean?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          city on the Ohio River in Ohio, U.S., founded 1789 and first called
          Losantiville; the name was changed 1790 by territorial Gov. Arthur St.
          Clair, in honor of the Society of the Cincinnati, a fraternal
          veterans' organization founded 1783 by former Revolutionary War
          officers (St. Clair was a member) and named for Lucius Quinctius
          Cincinnatus, 5c. B.C.E. Roman hero who saved the city from crisis and
          then retired to his farm rather than rule. His name is a cognomen in
          the gens Quinctia, meaning literally "with curly hair," from Latin
          cincinnus "curl, curly hair." Related: Cincinnatian.{" "}
        </p>
      </div>
    </div>
    {/* 8 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>Why is Cincinnati called the Queen City?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          Cincinnati claims ownership because the city became known as “The
          Queen of the West” as its population grew in the late 18th Century
          with Americans pushing westward along the Ohio Valley.{" "}
        </p>
      </div>
    </div>
    {/* 9 */}
    <div onClick={handleClick}  className="faq">
      <div className="question">
        <h3>why is cincinnati called the reds?</h3>
        <svg width={15} height={10} viewBox="0 0 42 25">
          <path
            d="M3 3L21 21L39 3"
            stroke="white"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="answer">
        <p>
          The Cincinnati Reds are the oldest professional baseball team in the
          Major Leagues. They began as the Cincinnati Red Stockings in 1881
          because, yes, you guessed it, they wore red stockings with their
          uniforms. Eventually they changed the name to Redlegs, and soon after
          shortened that to just Reds{" "}
        </p>
      </div>
    </div>
  </section>

</>
            
    
    )
}

export default (FAQs)