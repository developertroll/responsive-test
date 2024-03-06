import CardContainer from "@/CardContainer";
import ChatComponent from "@/ChatComponent";

const messageObj = {
  message: "Hello, world!",
  time: "2022-01-01T00:00:00Z",
  id: "user1",
  avatar: "https://example.com/avatar.png",
};

export default function Page() {
  function samePerson(id) {
    return id === messageObj.id;
  }
  return (
    <CardContainer
      title="chat"
      content={<ChatComponent props={messageObj} />}
    />
  );
}
