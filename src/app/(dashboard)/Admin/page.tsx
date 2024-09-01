import UserCard from "@/components/UserCard";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className=" w-full lg:w-2/3 bg-red-200">
        {/* USERS-CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="parents" />
          <UserCard type="teachers" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 bg-blue-300">2</div>
    </div>
  );
}
 
export default Admin