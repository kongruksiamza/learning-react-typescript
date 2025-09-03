import { type Employee } from "../App";
interface EmployeeListProps{
    data:Employee[]
    deleteData:(id:number)=>void
}

export default function EmployeeList({data,deleteData}:EmployeeListProps) {
  return (
    <>
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            ชื่อ: {person.name} | เงินเดือน {person.salary} บาท
            <button onClick={() => deleteData(person.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </>
  );
}
