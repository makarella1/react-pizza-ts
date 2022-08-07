import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f4ecec"
      foregroundColor="#f1e9e9"
      style={{ margin: '0 auto' }}
    >
      <circle cx="142" cy="132" r="132" />
      <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
      <rect x="3" y="426" rx="10" ry="10" width="91" height="27" />
      <rect x="144" y="415" rx="10" ry="10" width="135" height="45" />
      <rect x="0" y="275" rx="19" ry="19" width="280" height="23" />
    </ContentLoader>
  );
};

export default Skeleton;
