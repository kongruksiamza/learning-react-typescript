import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import AddForm from "./components/AddForm";

export interface Employee {
  id: number;
  name: string;
  salary: number;
}

function App() {
  const [isVisible, setIsvisible] = useState<boolean>(true);
  const [data, setData] = useState<Employee[]>([
    { id: 1, name: "ก้อง", salary: 100000 },
    { id: 2, name: "สมชาย", salary: 15000 },
    { id: 3, name: "สมหญิง", salary: 18000 },
  ]);

  function insertData(emp:Employee){
    // console.log("ข้อมูลที่ส่งมาจากฟอร์ม = ",emp)
    setData([...data,emp])
  }

  function deleteData(id:number){//2
    setData(data.filter(person=>person.id !==id))
  }
  return (
    <>
    <Header title="แอพจัดการข้อมูลพนักงาน"/>
    <AddForm insertData={insertData}/>
      <button onClick={() => setIsvisible(!isVisible)}>
        {isVisible ? "ซ่อน" : "แสดง"}
      </button>
      <p>จำนวนข้อมูล {data.length} รายการ</p>
      {isVisible && <EmployeeList data={data} deleteData={deleteData}/>}
      <hr />
      <Footer company="ก้องรักสยาม สตูดิโอ" year={2025}/>
    </>
  );
}

export default App;
