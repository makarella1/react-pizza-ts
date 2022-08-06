import ContentLoader from 'react-content-loader';

const MyLoader = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={406}
      height={466}
      viewBox="0 0 406 466"
      backgroundColor="#f4ecec"
      foregroundColor="#f1e9e9"
    >
      <circle cx="206" cy="143" r="132" />
      <rect x="57" y="285" rx="17" ry="17" width="296" height="15" />
      <rect x="0" y="315" rx="10" ry="10" width="406" height="88" />
      <rect x="2" y="434" rx="10" ry="10" width="91" height="27" />
      <rect x="267" y="416" rx="10" ry="10" width="135" height="45" />
    </ContentLoader>
  );
};

export default MyLoader;
