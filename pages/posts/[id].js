import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/post'


export default function Post({postData}) {
  return (
    <Layout>
    
    {postData.id}
    <br />
    {postData.title}
  </Layout>
  );
}

export async function getStaticPaths() {
    const path = getAllPostIds();
    console.log(path);
    return{
        paths: path,
        fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }