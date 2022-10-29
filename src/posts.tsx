interface Post {
  date: string;
  title: string;
  thumbnail: string;
  showOnlyImage: boolean;
  file: string;
  text: string;
  route: string;
}

const posts: Post[] = [
  {
    date: "2016-11-05T19:41:01+05:30",
    title: "Case study: Designing a Fitness App",
    thumbnail: "/img/portfolio/Cover.png",
    showOnlyImage: false,
    file: "Work1",
    text: "UX Design for a fitness app that keeps the user motivated",
    route: "/fitnesscasestudy",
  },
];

export default posts;
