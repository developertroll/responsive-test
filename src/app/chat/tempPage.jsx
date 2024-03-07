import ChatGroups from "@/chatGroups";

export default function TempPage({ props }) {
  return (
    <div>
      {props.map((prop) => {
        return <ChatGroups props={prop} key={prop.idx} />;
      })}
    </div>
  );
}
