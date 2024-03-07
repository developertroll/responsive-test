const chatGroups = [
  {
    idx: 0,
    name: "Group 1",
    avatars: ["kimcoding.jpg", "parksangmin.jpg", "leedongmin.jpg"],
    lastContent: {
      userIdx: 1,
      content: "안녕하세요",
      time: "2023-03-06",
    },
  },
  {
    idx: 1,
    name: "Group 2",
    avatars: ["kimcoding.jpg", "parksangmin.jpg", "leedongmin.jpg"],
    lastContent: {
      userIdx: 2,
      content: "안녕하세요",
      time: "2023-03-06",
    },
  },
  {
    idx: 2,
    name: "Group 3",
    avatars: ["kimcoding.jpg", "parksangmin.jpg", "leedongmin.jpg"],
    lastContent: {
      userIdx: 3,
      content: "안녕하세요",
      time: "2023-03-06",
    },
  },
];

export async function GET() {
  return Response.json(chatGroups);
}
