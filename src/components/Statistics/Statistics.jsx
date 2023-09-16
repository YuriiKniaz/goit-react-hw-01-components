import stat from './Statistics.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ stats }) => {
  return (
    <section className={stat.statistics}>
      <h2 className={stat.title}>Upload stats</h2>
      <ul className={stat.statList}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={stat.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={stat.label}>{item.label}</span>
              <span className={stat.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
