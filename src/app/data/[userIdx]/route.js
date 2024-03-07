const userArray = [
  {
    userIdx: 1,
    name: "김민수",
    nickname: "김코딩",
    grade: 3,
    avatar: "kimcoding.jpg",
  },
  {
    userIdx: 2,
    name: "박상민",
    nickname: "박상민",
    grade: 2,
    avatar: "parksangmin.jpg",
  },
  {
    userIdx: 3,
    name: "이동민",
    nickname: "이동민",
    grade: 1,
    avatar: "leedongmin.jpg",
  },
];

export async function GET(request, { params }) {
  return Response.json(
    userArray.find((user) => user.userIdx === Number(params.userIdx))
  );
}
