import localStorage from "@/localStorage";

export function ChatUser(number) {
  const persistData = localStorage.getItem("chatUser");
  const userList = fetch(`https://randomuser.me/api/?results=${number || 10}`, {
    cache: "force-cache",
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("chatUser", JSON.stringify(data));
      return data;
    });
  return persistData ? JSON.parse(persistData) : userList;
}
