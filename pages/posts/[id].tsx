import { getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = params?.id ? await getPostData(params.id) : {};
  return {
    props: {
      postData
    }
  };
};
export default function Post({ postData }: any) {
  return (
    <div>
      {postData.title}
      {postData.date}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
};
