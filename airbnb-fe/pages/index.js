import defineProperties from "define-properties";
import { sanityClient } from "../sanity";

const Home = ({ properties }) => {
  console.log(properties);
  return <div></div>;
};

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]';
  const properties = await sanityClient.fetch(query);

  if (!defineProperties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
      },
    };
  }
};

export default Home;
