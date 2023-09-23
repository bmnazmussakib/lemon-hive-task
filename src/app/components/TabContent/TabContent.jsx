import "./tabContent.scss";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineDribbble,
  AiFillGithub,
} from "react-icons/ai";

export default function TabContent({ data }) {
  const { title, content } = data;
  // console.log(content);
  return (
    <div className="tab-content">
      {content.map((item, index) => {
        // console.log(item)
        return (
          <>
            {!item.event && (
              <div className="card">
                <div className="left">
                  <div class="img">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="right">
                  <div className="text">
                    <span>
                      <h4 className="title">{item.title}</h4>
                      {item.social && (
                        <div className="social-links">
                          <a href={item.social.twitter}>
                            <AiOutlineTwitter />
                          </a>
                          <a href={item.social.linkedin}>
                            <AiFillLinkedin />
                          </a>
                          <a href={item.social.dribble}>
                            <AiOutlineDribbble />
                          </a>
                          <a href={item.social.github}>
                            <AiFillGithub />
                          </a>
                        </div>
                      )}
                    </span>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </div>
            )}
            {item.event && (
              <div className="event-card">
                <div className="date-time">
                  <h4 className="date">{item.date}</h4>
                  <p className="day">{item.day}</p>
                </div>
                <div className="event">
                  {item?.event?.map((event) => {
                    return (
                      <div className="single-event">
                        <p>{event.title}</p>
                        <ul>
                          <li>{event.duration}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
