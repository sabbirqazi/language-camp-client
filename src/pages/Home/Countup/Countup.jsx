import CountUp from 'react-countup';

const Countup = () => {
  return (
    <div>
      <CountUp start={0} end={100} delay={0} duration={50}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Countup;
