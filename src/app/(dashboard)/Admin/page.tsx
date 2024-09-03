import UserCard from "@/components/UserCard";
import CountCharts from "@/components/CountCharts";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className=" w-full lg:w-2/3 bg-white p-3  rounded-md" >
        {/* USERS-CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="parents" />
          <UserCard type="teachers" />
          <UserCard type="staff" />
        </div>
        <div>
          <div>
           <CountCharts/>
          </div>
          <div>

          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 bg-white rounded-md ">2</div>
    </div>
  );
}
 
export default Admin