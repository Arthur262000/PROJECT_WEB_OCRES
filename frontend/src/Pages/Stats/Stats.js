import axios from "axios";
import "./Stats.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Stats = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

//   const fetchStats = async () => {
//     const { data } = await axios.get(
//     );

//     setContent(data.results);
//   };

//   useEffect(() => {
//     window.scroll(0, 0);
//     fetchStats();
//     // eslint-disable-next-line
//   }, [page]);

  return (
    <div>
      <span className="pageTitle">Statistiques</span>
      <div className="stats">
      </div>
    </div>
  );
};

export default Stats;
