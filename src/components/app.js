import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>Copyright&nbsp;&copy;&nbsp;2022&nbsp;-&nbsp;至今&nbsp;<Link to='https://blog.happyking.top/about' text='欢乐小王' />&nbsp;|&nbsp;Powered by&nbsp;<Link to='https://vercel.com/' text='Vercel' />&nbsp;|&nbsp;由&nbsp;Spring&nbsp;强力驱动</p>
        </div>
      </div>
    </>
  );
}

export default App;
