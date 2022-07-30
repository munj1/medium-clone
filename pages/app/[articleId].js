import AppNav from "../../components/AppNav";
import Content from "../../components/Content";
import Content2 from "../../components/Content2";
import { getAllArticles } from "../api/articles";
import { getArticleById } from "../api/articles/[articleId]";

import { getUserById } from "../api/users/[userId]";

const Current = (props) => {
  const { userData, articleData } = props;
  const article = JSON.parse(articleData);
  const author = JSON.parse(userData);
  // console.log(article, author);

  return (
    <AppNav>
      <div className="grid grid-cols-3">
        <main className="col-span-3 lg:col-span-2">
          {/* Primary column */}
          <section aria-labelledby="primary-heading" className="">
            <h1 id="primary-heading" className="sr-only">
              Photos
            </h1>
            {/* Your content */}
            <Content article={article} />
          </section>
        </main>

        <aside className="bg-white border-l border-gray-200 col-span-3 lg:col-span-1">
          <Content2 userData={author} />
        </aside>
      </div>
    </AppNav>
  );
};

export default Current;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const articleId = params.articleId;
  // console.log("articleId", articleId);

  const articleData = await getArticleById(articleId);
  // console.log("article", articleData.authorId);
  const authorId = articleData.authorId;

  const userData = await getUserById(authorId);
  // console.log("userData", userData);

  return {
    props: {
      userData: JSON.stringify(userData),
      articleData: JSON.stringify(articleData),
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const articles = await getAllArticles();
  const articleIds = articles.map((article) => article.articleId);
  const pathWithParams = articleIds.map((id) => {
    return { params: { articleId: id } };
  });

  return {
    paths: pathWithParams,
    fallback: "blocking",
  };
};
