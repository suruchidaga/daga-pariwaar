import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Loader from "@components/utility/loader";
import { Link } from "react-router-dom";
import FamilyDetailsWrapper from "../FamilyDetails/styles";
import TreeIcon from "@assets/images/family_tree.jpeg";
import EventsIcon from "@assets/images/events.jpg";
import PrayersIcon from "@assets/images/prayer_time.jpg";

export default function DefaultDashboard() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const count = 5;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

  useEffect(() => {
    setLoading(true);
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setList(res.results);
        setLoading(false);
      });
  }, []);

  return (
    <FamilyDetailsWrapper>
      <div style={{ fontSize: 28, fontWeight: "bold" }}>Welcome To Daga Pariwaar</div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="card-grid">

                <li key="family-tree" style={{ cursor: "pointer" }}>
                <Link
                    to={{ pathname: `./dashboard/family-details` }}
                    key="family-tree-link"
                >
                    <article className="card">
                    <div className="card-image">
                      <img src={TreeIcon} alt="Family Hierarchy" />
                    </div>
                    <div className="card-content">
                      <h4 className="card-name">Family Hierarchy</h4>
                    </div>
                  </article>
              </Link>
              </li>
              <li key="events" style={{ cursor: "pointer" }}>
                <Link
                    to={{ pathname: `./dashboard/family-events` }}
                    key="family-events-link"
                >
                    <article className="card">
                    <div className="card-image">
                      <img src={EventsIcon} alt="Celebration Times" />
                    </div>
                    <div className="card-content">
                      <h4 className="card-name">Upcoming Celebration Times</h4>
                    </div>
                  </article>
              </Link>
              </li>
              <li key="prayer" style={{ cursor: "pointer" }}>
                <Link
                    to={{ pathname: `./dashboard/prayers` }}
                    key="prayer-link"
                >
                    <article className="card">
                    <div className="card-image">
                      <img src={PrayersIcon} alt="Prayers" />
                    </div>
                    <div className="card-content">
                      <h4 className="card-name">Morning Prayers</h4>
                    </div>
                  </article>
              </Link>
              </li>
        </ul>
      )}
    </FamilyDetailsWrapper>
  );
}
