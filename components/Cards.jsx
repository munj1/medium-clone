import Bookmark from "./icon/bookmark";
import Image from "next/image";
import { useRouter } from "next/router";
import { usesidebarNavigation } from "./store";
/* This example requires Tailwind CSS v2.0+ */
// const posts = [
//   {
//     postId: "11",
//     title: "Boost your conversion rate",
//     category: "Article",
//     brief: "Lorem ipsum dolor sit amet consectetur.",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
//     date: "Mar 16, 2020",
//     postedOn: "2020-03-16",
//     bannerImg:
//       "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//     postLength: "8",
//     author: "Roel Aufderehar",
//     authorId: "11",
//     authorImg:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// {
//   title: "How to use search engine optimization to drive sales",
//   href: "#",
//   category: { name: "Video", href: "#" },
//   body:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
//   date: "Mar 10, 2020",
//   postedOn: "2020-03-10",
//   bannerImg:
//     "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//   postLength: "4 min",
//   author: {
//     name: "Brenna Goyette",
//     href: "#",
//     bannerImg:
//       "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// },
// {
//   title: "Improve your customer experience",
//   href: "#",
//   category: { name: "Case Study", href: "#" },
//   body:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
//   date: "Feb 12, 2020",
//   postedOn: "2020-02-12",
//   bannerImg:
//     "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
//   postLength: "11 min",
//   author: {
//     name: "Daniela Metz",
//     href: "#",
//     bannerImg:
//       "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
// },
// ];

export default function Cards({ posts }) {
  const router = useRouter();
  const { setPostId } = usesidebarNavigation();

  return (
    <div className="relative bg-gray-50 py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              onClick={() => {
                router.push(`/app/${post.articleId}`);
                setPostId(post.articleId);
              }}
              key={post.articleId}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.bannerImg}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a className="hover:underline">{post.category}</a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{post.brief}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a>
                      <span className="sr-only">{post.author}</span>
                      <Image
                        className="rounded-full"
                        src={post.authorImg}
                        alt=""
                        width={40}
                        height={40}
                        objectFit={"cover"}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a className="hover:underline">{post.author}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.postedOn}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.postLength} read</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Bookmark isFilled={false} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
