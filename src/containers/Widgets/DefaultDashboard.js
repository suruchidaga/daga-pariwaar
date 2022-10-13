import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import Loader from "@components/utility/loader";
import { Link } from "react-router-dom";
import FamilyDetailsWrapper from "../FamilyDetails/styles";

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
      <div style={{ fontSize: 28, fontWeight: "bold" }}>Family List</div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="card-grid">
          {!isEmpty(list) &&
            list.map((item, i) => (
              <Link
                to={{ pathname: `./dashboard/family-details` }}
                onClick={() => {
                  localStorage.setItem("selectedMember", JSON.stringify(item));
                }}
                key={i}
              >
                <li key={i} style={{ cursor: "pointer" }}>
                  <article className="card">
                    <div className="card-image">
                      <img src={item?.picture?.large} alt={item?.name?.first} />
                    </div>
                    <div className="card-content">
                      <h3 className="card-name">{`${item?.name?.first} ${item?.name?.last}`}</h3>
                      <ul className="card-list">
                        <li>
                          Phone: <span>9899915942</span>
                        </li>
                        <li>
                          Gender: <span>{item?.gender}</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                </li>
              </Link>
            ))}
        </ul>
      )}
    </FamilyDetailsWrapper>
  );
}
