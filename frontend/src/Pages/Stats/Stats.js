import "./Stats.css";
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import {ArcElement} from 'chart.js'
Chart.register(ArcElement);
Chart.register(ChartDataLabels);


const Stats = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [content, setContent] = useState([]);
  
   const fetchStats = async () => {
  //   const { data } = await axios.get(
  //   );
  //   setContent(data.results);
   };

  useEffect(() => {
    window.scroll(0, 0);
    fetchStats();
  });

  return (
    <div>
      <span className="pageTitle">Statistiques</span>
      <div className="stats">
        < Pie
          data={{
            labels: ['red','Blue'],
            datasets: [
              {
              label: 'Movie Types',
              data : [30,70],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset:4
            }]
          }}
        height={300}
        width={300}
        options={{
          plugins: {
            datalabels: {
                formatter: function (value, context) {
                    return context.chart.data.labels[
                        context.dataIndex
                    ];
                },
            },
        },
          layout: {
            padding: {                
              top: 20                
            }
          },
          legend: {
            display: true,
          },
          maintainAspectRatio: false
        }}
          />
      </div>
      <span className="legend">Votre Film Préféré</span>
    </div>
  );
}


export default Stats;
